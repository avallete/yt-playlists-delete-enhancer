import { Innertube } from 'youtubei.js'
import { PlaylistNotEditableError, PlaylistEmptyError } from '~src/errors'
import { YTConfigData, PlaylistVideo, Playlist, PlaylistContinuation } from './youtube'

function extractPlaylistVideoListRendererContents(playlistVideoListContents: Array<any>): PlaylistVideo[] {
  return playlistVideoListContents.map((item): PlaylistVideo => {
    return {
      videoId: item.playlistVideoRenderer.videoId,
      setVideoId: item.playlistVideoRenderer.setVideoId,
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
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (input, init = {}) => {
      const headers = new Headers()
      headers.append('X-YouTube-Client-Name', config.INNERTUBE_CONTEXT_CLIENT_NAME)
      headers.append('X-YouTube-Client-Version', config.INNERTUBE_CONTEXT_CLIENT_VERSION)
      headers.append('X-YouTube-Device', config.DEVICE)
      headers.append('X-YouTube-Identity-Token', config.ID_TOKEN)
      const options = { ...init, headers }
      return fetch(input, options)
    },
  })

  const response = await youtube.session.http.fetch(`/playlist?list=${playlistName}&pbj=1`, {
    baseURL: 'https://www.youtube.com',
  })
  const json = await response.json()
  const data =
    json.response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0]
      .itemSectionRenderer.contents[0].playlistVideoListRenderer

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

async function fetchPlaylistContinuation(continuation: PlaylistContinuation): Promise<PlaylistContinuation> {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...arguments_) => fetch(...arguments_),
  })

  const body = { continuation: continuation.continuationToken }
  const result = await youtube.actions.execute('/browse', body)
  const data = result.data.onResponseReceivedActions?.[0].appendContinuationItemsAction.continuationItems

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
        await fetchPlaylistContinuation(playlist.continuations.at(-1)!),
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

async function getFeedbackToken(videoId: string): Promise<string | undefined> {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...arguments_) => fetch(...arguments_),
  })

  const history = await youtube.getHistory()

  for (const section of history.sections) {
    for (const content of section.contents) {
      if (content.hasKey('id') && content.id === videoId) {
        return content.hasKey('menu') && content.menu.top_level_buttons[0].endpoint.payload.feedbackToken
      }
    }
  }

  throw new Error('No token found in watch history')
}

async function sendFeedbackRequest(feedbackToken: string) {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...arguments_) => fetch(...arguments_),
  })

  const body = { feedbackTokens: [feedbackToken] }
  const result = await youtube.actions.execute('/feedback', body)
  const response = result.data

  if (!response.feedbackResponses[0].isProcessed) {
    throw new Error('Failed to remove video from watch history')
  }
}

export async function removeWatchHistoryForVideo(videoId: string) {
  const feedbackToken = await getFeedbackToken(videoId)
  if (feedbackToken) {
    await sendFeedbackRequest(feedbackToken)
  }
}

export async function removeVideosFromPlaylist(playlistId: string, videosToRemove: PlaylistVideo[]) {
  const youtube = await Innertube.create({
    cookie: document.cookie,
    fetch: (...arguments_) => fetch(...arguments_),
  })

  const body = {
    playlist_id: playlistId,
    actions: videosToRemove.map((video) => ({
      action: 'ACTION_REMOVE_VIDEO',
      set_video_id: video.setVideoId,
    })),
  }

  await youtube.actions.execute('/browse/edit_playlist', body)
}
