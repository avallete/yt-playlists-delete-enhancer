/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
const Cookies = require('js-cookie')
const sha1 = require('sha1')
const _get = require('lodash.get')

class GMScript {
  constructor(ytcfgdata, playlistVideos, playlistName) {
    this.ytcfgdata = ytcfgdata
    this.playlistVideos = playlistVideos
    this.playlistName = playlistName
    this.baseRequestHeaders = {
      'Content-Type': 'application/json',
      'X-Goog-Visitor-Id': this.ytcfgdata.VISITOR_DATA,
      'X-Youtube-Client-Name': this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_NAME,
      'X-Youtube-Client-Version': this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_VERSION,
      // Those two are mandatory together to successfully perform request
      'X-Goog-AuthUser': '0',
      'X-Goog-PageId': this.ytcfgdata.DELEGATED_SESSION_ID,
    }
  }

  // Get the array of "playlistVideoRenderer" either from continuationsItems or playlistVideoListRenderer
  // The last one should contain the continuation token if there is any.
  // Return null otherwise
  getPlaylistContinuationToken(playlistVideoListRendererContents) {
    const lastItem = playlistVideoListRendererContents[playlistVideoListRendererContents.length - 1]
    if (lastItem && lastItem.continuationItemRenderer) {
      return _get(lastItem, 'continuationItemRenderer.continuationEndpoint.continuationCommand.token')
    }
    return null
  }

  enableRemoveButton() {
    const button = document.querySelector('#removeVideosEnhancerButton')
    if (button) {
      button.disabled = false
    }
  }

  disableRemoveButton() {
    const button = document.querySelector('#removeVideosEnhancerButton')
    if (button) {
      button.disabled = true
    }
  }

  // Generate SAPISIDHASH header
  getAuthorizationHeader() {
    const time = Math.floor(Date.now() / 1000)
    const { origin } = new URL(document.URL)
    const apisid = Cookies.get('SAPISID')
    const shash = sha1(`${time} ${apisid} ${origin}`)
    return `SAPISIDHASH ${time}_${shash}`
  }

  getRequestHeaders() {
    return {
      ...this.baseRequestHeaders,
      Authorization: this.getAuthorizationHeader(),
    }
  }

  async getAllPlaylistVideos() {
    let playlistItems = this.playlistVideos
    let continuationToken = this.getPlaylistContinuationToken(playlistItems)

    // If there is continuations, it mean that the playlist is not fully loaded,
    // Request additional data until not futher videos to fetch
    while (continuationToken) {
      // Remove the last item from the playlist content wich is not a video but the object with continuation data
      playlistItems.pop()
      const body = {
        context: {
          // The only mandatory context are those two client infos
          client: {
            clientName: this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_NAME,
            clientVersion: this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_VERSION,
          },
        },
        continuation: continuationToken,
      }
      const resp = await fetch(`https://www.youtube.com/youtubei/v1/browse?key=${this.ytcfgdata.INNERTUBE_API_KEY}`, {
        credentials: 'include',
        headers: this.getRequestHeaders(),
        body: JSON.stringify(body),
        referrer: `https://www.youtube.com/playlist?list=${this.playlistName}`,
        method: 'POST',
        mode: 'cors',
      })
      if (resp.status === 200) {
        const respjson = await resp.json()
        const data = _get(respjson, 'onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems')
        playlistItems = playlistItems.concat(data)
        continuationToken = this.getPlaylistContinuationToken(data)
      }
    }
    return playlistItems
  }

  async removeVideosFromPlaylist(playlistId, videoIds) {
    const body = {
      actions: videoIds.map((vid) => ({ setVideoId: vid, action: 'ACTION_REMOVE_VIDEO' })),
      context: {
        // The only mandatory context are those two client infos
        client: {
          clientName: this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_NAME,
          clientVersion: this.ytcfgdata.INNERTUBE_CONTEXT_CLIENT_VERSION,
        },
      },
      params: 'CAFAAQ%3D%3D',
      playlistId,
    }
    const parameters = {
      credentials: 'include',
      headers: this.getRequestHeaders(),
      referrer: `https://www.youtube.com/playlist?list=${this.playlistName}`,
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
    }
    const resp = await fetch(
      `https://www.youtube.com/youtubei/v1/browse/edit_playlist?key=${this.ytcfgdata.INNERTUBE_API_KEY}`,
      parameters
    )
    if (resp.status === 200) {
      return await resp.json()
    }
    return false
  }

  getVideosIdsToDelete(watchTimeValue, playlistVideos) {
    return (
      playlistVideos
        .filter((itm) => !!_get({ itm }, 'itm.playlistVideoRenderer.thumbnailOverlays'))
        .filter(
          ({
            playlistVideoRenderer: {
              thumbnailOverlays: [, overlay],
            },
          }) =>
            // If it's not the second element in array, the videos haven't been played yet
            overlay.thumbnailOverlayResumePlaybackRenderer &&
            overlay.thumbnailOverlayResumePlaybackRenderer.percentDurationWatched >= watchTimeValue
        )
        // There was a reason for this "setVideoId", it's because they are not the same with videoId
        // And we DO NEED the "sedVideoId" value to perform remove requests.
        .map(({ playlistVideoRenderer: vid }) => vid.setVideoId || vid.videoId)
    )
  }

  async handleRemoveVideosClickedEvent(watchTimeValue) {
    this.disableRemoveButton()
    const idsToDelete = this.getVideosIdsToDelete(watchTimeValue, this.playlistVideos)
    if (idsToDelete.length > 0) {
      const respjson = await this.removeVideosFromPlaylist(this.playlistName, idsToDelete)
      if (respjson.status === 'STATUS_SUCCEEDED') {
        idsToDelete.forEach((id) => {
          const { videoId } = this.playlistVideos.find(
            (v) => v.playlistVideoRenderer.setVideoId == id
          ).playlistVideoRenderer
          const videoRenderer = document.querySelector(
            `ytd-playlist-video-renderer a[href^="/watch?v=${videoId}"]#thumbnail`
          )
          if (videoRenderer) {
            videoRenderer.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
          } else {
            window.location.reload()
          }
        }, this)
      }
    }
    this.enableRemoveButton()
  }

  constructDOM() {
    return document.createRange().createContextualFragment(`
          <div id="yt-remove-video-enhancer-container" class="style-scope ytd-playlist-sidebar-renderer">
              <div class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
                  <p>Remove all videos who has been watched at more or equal X percent</p>
                  <input id="removeVideosEnhancerValue" type="number" min="0" max="100" value="99">
                  <button id="removeVideosEnhancerButton">Remove !</button>
              </div>
          </div>`)
  }

  createEventsListeners(DOMFragment) {
    const input = DOMFragment.querySelector('#removeVideosEnhancerValue')
    const button = DOMFragment.querySelector('#removeVideosEnhancerButton')
    button.addEventListener('click', () => this.handleRemoveVideosClickedEvent(input.value))
  }

  appendDOM(DOMFragment) {
    const container = document.evaluate(
      '//ytd-playlist-sidebar-renderer/div[@id="items"]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
    container.append(DOMFragment)
  }

  run() {
    const domFragment = this.constructDOM()
    this.createEventsListeners(domFragment)
    this.appendDOM(domFragment)
    this.disableRemoveButton()
    this.getAllPlaylistVideos()
      .then((playlistContent) => {
        this.playlistVideos = playlistContent
        this.enableRemoveButton()
      })
      .catch((error) => {
        console.error(error)
        console.error(this)
      })
  }
}

function cleanupDOM() {
  // Destroy every DOM elements created by the script
  const extendedDOM = document.querySelector('#yt-remove-video-enhancer-container')
  if (extendedDOM) {
    extendedDOM.remove()
  }
}

async function getFirstPlaylistData(ytcfgdata, playlistName) {
  const url = `https://www.youtube.com/playlist?list=${playlistName}&pbj=1`
  const resp = await fetch(url, {
    credentials: 'include',
    headers: {
      'X-YouTube-Client-Name': ytcfgdata.INNERTUBE_CONTEXT_CLIENT_NAME,
      'X-YouTube-Client-Version': ytcfgdata.INNERTUBE_CONTEXT_CLIENT_VERSION,
      'X-YouTube-Device': ytcfgdata.DEVICE,
      'X-Youtube-Identity-Token': ytcfgdata.ID_TOKEN,
      'X-YouTube-Page-CL': ytcfgdata.PAGE_CL,
      'X-YouTube-Page-Label': ytcfgdata.PAGE_BUILD_LABEL,
    },
    referrer: `https://www.youtube.com/playlist?list=${playlistName}`,
    method: 'GET',
    mode: 'cors',
  })
  const jsondata = await resp.json()
  return _get(
    { jsondata },
    'jsondata[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer'
  )
}

async function getInitiaPlaylistVideoListRenderer(ytcfgdata, playlistName) {
  return await getFirstPlaylistData(ytcfgdata, playlistName)
}

async function main(playlistName) {
  try {
    // Prefetched initial datas present in the page
    const ytcfgdata = window.ytcfg.data_ // configuration of youtube app containing auth tokens
    const playlistVideoRenderer = await getInitiaPlaylistVideoListRenderer(ytcfgdata, playlistName)

    if (ytcfgdata && playlistVideoRenderer && playlistVideoRenderer.isEditable) {
      const script = new GMScript(ytcfgdata, playlistVideoRenderer.contents || [], playlistName)
      script.run()
    } else {
      console.error('Missing ytconfig or playlist data or playlist is not editable:', ytcfgdata, playlistVideoRenderer)
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  cleanupDOM,
  main,
}
