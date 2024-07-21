import sha1 from 'sha1'
import { Innertube } from "youtubei.js"
import { PlaylistNotEditableError, PlaylistEmptyError } from '~src/errors'
import { YTConfigData, PlaylistVideo, Playlist, PlaylistContinuation } from './youtube'

type YTHeaderKey =
  | 'X-Goog-Visitor-Id'
  | 'X-YouTube-Client-Name'
  | 'X-YouTube-Client-Version'
  | 'X-YouTube-Device'
  | 'X-YouTube-Identity-Token'
  | 'X-YouTube-Page-CL'
  | 'X-YouTube-Page-Label'
  | 'X-Goog-AuthUser'
  | 'X-Goog-PageId'
  | 'Authorization'

type HeaderKey = 'Content-Type' | YTHeaderKey

type Headers = Partial<Record<HeaderKey, string>>

const API_BASE_URL = new URL('https://www.youtube.com/youtubei/v1')
const API_GET_PLAYLIST_VIDEOS_URL = new URL(`${API_BASE_URL}/browse`)
const BASE_REFERER_URL = new URL('https://www.youtube.com/playlist')
const API_V1_REQUIRED_HEADERS: HeaderKey[] = [
  'Content-Type',
  'Authorization',
  'X-Goog-Visitor-Id',
  'X-YouTube-Client-Name',
  'X-YouTube-Client-Version',
  'X-Goog-AuthUser',
  'X-Goog-PageId',
]
const API_REQUIRED_HEADERS: HeaderKey[] = [
  'X-YouTube-Client-Name',
  'X-YouTube-Client-Version',
  'X-YouTube-Device',
  'X-YouTube-Identity-Token',
  'X-YouTube-Page-CL',
  'X-YouTube-Page-Label',
]

function generateSAPISIDHASH(origin: string, sapisid: string, date: Date = new Date()): string {
  const roundedTimestamp = Math.floor(date.getTime() / 1000)
  // deepcode ignore InsecureHash: we need to replicate youtube webapp behavior
  // eslint-disable-next-line sonarjs/no-nested-template-literals
  return `${roundedTimestamp}_${sha1(`${roundedTimestamp} ${sapisid} ${origin}`)}`
}

function generateRequestHeaders(config: YTConfigData, headerKeys: HeaderKey[] = []): Headers {
  const allHeaders: Headers = {
    'Content-Type': 'application/json',
    'X-Goog-Visitor-Id': config.VISITOR_DATA,
    'X-YouTube-Client-Name': config.INNERTUBE_CONTEXT_CLIENT_NAME,
    'X-YouTube-Client-Version': config.INNERTUBE_CONTEXT_CLIENT_VERSION,
    'X-YouTube-Device': config.DEVICE,
    'X-YouTube-Identity-Token': config.ID_TOKEN,
    'X-YouTube-Page-CL': config.PAGE_CL,
    'X-YouTube-Page-Label': config.PAGE_BUILD_LABEL,
    // Those two are mandatory together to successfully perform request
    'X-Goog-AuthUser': '1',
    'X-Goog-PageId': config.DELEGATED_SESSION_ID,
    Authorization: `SAPISIDHASH ${generateSAPISIDHASH(config.ORIGIN_URL, config.SAPISID)}`,
  }
  const result: Headers = {}
  // Add each wanted header key to result headers
  for (const headerKey of headerKeys) {
    result[headerKey] = allHeaders[headerKey]
  }
  return result
}

function extractPlaylistVideoListRendererContents(playlistVideoListContents: Array<any>): PlaylistVideo[] {
  return playlistVideoListContents.map((item): PlaylistVideo => {
    return {
      videoId: item.playlistVideoRenderer.videoId,
      percentDurationWatched:
        item.playlistVideoRenderer.thumbnailOverlays[1].thumbnailOverlayResumePlaybackRenderer
          ?.percentDurationWatched || 0,
    }
  })
}

function extractPlaylistContinuation(playlistContents: Array<any>): PlaylistContinuation {
  // ContinuationToken should be in the last item of the playlist contents
  const lastItem = playlistContents.at(-1)
  if (lastItem && lastItem.continuationItemRenderer) {
    // Remove last item from playlist contents since it contain continuationItem
    playlistContents.pop()
    return {
      videos: extractPlaylistVideoListRendererContents(playlistContents),
      continuationToken: lastItem.continuationItemRenderer.continuationEndpoint.continuationCommand.token,
    }
  }
  return {
    videos: extractPlaylistVideoListRendererContents(playlistContents),
  }
}

async function fetchPlaylistInitialData(config: YTConfigData, playlistName: string): Promise<Playlist> {
  const url = new URL(`${BASE_REFERER_URL}`)
  const headers = generateRequestHeaders(config, API_REQUIRED_HEADERS)

  url.searchParams.append('list', playlistName)
  // Get the first page data for the playlist
  url.searchParams.append('pbj', '1')
  const response = await fetch(`${url}`, {
    credentials: 'include',
    headers,
    method: 'GET',
    mode: 'cors',
  })
  const respJson = await response.json()
  const data =
    respJson.response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer
      .contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer

  if (!data) {
    throw PlaylistEmptyError
  }

  return {
    playlistId: data.playlistId,
    isEditable: data.isEditable,
    canReorder: data.canReorder,
    continuations: [extractPlaylistContinuation(data.contents)],
  }
}

async function fetchPlaylistContinuation(
  config: YTConfigData,
  continuation: PlaylistContinuation,
): Promise<PlaylistContinuation> {
  const url = new URL(`${API_GET_PLAYLIST_VIDEOS_URL}`)
  const headers = generateRequestHeaders(config, API_V1_REQUIRED_HEADERS)
  const body = {
    context: {
      client: {
        clientName: config.INNERTUBE_CONTEXT_CLIENT_NAME,
        clientVersion: config.INNERTUBE_CONTEXT_CLIENT_VERSION,
      },
    },
    continuation: continuation.continuationToken,
  }

  url.searchParams.append('key', config.INNERTUBE_API_KEY)
  const response = await fetch(`${url}`, {
    credentials: 'include',
    headers,
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors',
  })
  const responseJson = await response.json()
  const data = responseJson.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems
  return extractPlaylistContinuation(data)
}

export async function fetchAllPlaylistContent(config: YTConfigData, playlistName: string): Promise<Playlist> {
  const playlist = await fetchPlaylistInitialData(config, playlistName)
  if (playlist.isEditable) {
    // If all data has been retrieved, the last continuation item token will be undefined
    while (playlist.continuations.at(-1)?.continuationToken !== undefined) {
      playlist.continuations.push(
        // We need the next continuationToken to launch the next request
        // eslint-disable-next-line no-await-in-loop
        await fetchPlaylistContinuation(config, playlist.continuations.at(-1)!),
      )
    }
    // Merge all the videos into a single PlaylistContinuation
    let videos: PlaylistVideo[] = []
    for (const continuation of playlist.continuations) {
      // eslint-disable-next-line unicorn/prefer-spread
      videos = [...videos, ...continuation.videos]
    }
    playlist.continuations = [{ videos }]
    return playlist
  }
  throw PlaylistNotEditableError
}

async function getRemoveFromHistoryToken(videoId: string): Promise<string> {
  const initDataRegex = /(?:window\["ytInitialData"]|ytInitialData)\W?=\W?({.*?});/
  const result = await fetch('https://www.youtube.com/feed/history', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  })
  const body = await result.text()

  try {
    const matchedData = body.match(initDataRegex)
    if (!matchedData || !matchedData[1]) throw new Error('Failed to parse initData')
    const initData = JSON.parse(matchedData[1])

    const groups =
      initData?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer?.contents
        .map((group: { itemSectionRenderer: object }) => group.itemSectionRenderer)
        .filter(Boolean)

    let matchingVideo
    for (const item of groups) {
      for (const { videoRenderer } of item.contents) {
        if (videoRenderer?.videoId && videoId === videoRenderer?.videoId) {
          matchingVideo = videoRenderer
          break
        }
      }
    }

    if (!matchingVideo) {
      throw new Error('Video not found in watch history')
    }

    return matchingVideo?.menu?.menuRenderer?.topLevelButtons?.[0]?.buttonRenderer?.serviceEndpoint?.feedbackEndpoint
      ?.feedbackToken
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    throw new Error('Failed to parse initData')
  }
}

async function sendFeedbackRequest(feedbackToken: string) {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...args) => fetch(...args),
  })

  const body = {feedbackTokens: [feedbackToken]}
  const result = await youtube.actions.execute('/feedback', body)
  const response = result.data

  if (!response.feedbackResponses[0].isProcessed) {
    throw new Error('Failed to remove video from watch history')
  }
}

export async function removeWatchHistoryForVideo(videoId: string) {
  const feedbackToken = await getRemoveFromHistoryToken(videoId)
  if (feedbackToken) {
    await sendFeedbackRequest(feedbackToken)
  }
}

export async function removeVideosFromPlaylist(
  playlistId: string,
  videosToRemove: PlaylistVideo[],
): Promise<boolean> {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...args) => fetch(...args),
  })

  try {
    await youtube.playlist.removeVideos(playlistId, videosToRemove.map(({ videoId }) => videoId))
    return true
  } catch (error) {
    return false
  }
}
