import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'
import { PlaylistVideo } from '~src/yt-api'

function decrementNumberOfVideosInPlaylist(value: number) {
  const spanElement: HTMLSpanElement = document.evaluate(
    XPATH.YT_NUMBERS_OF_VIDEOS_IN_PLAYLIST,
    document,
    undefined,
    XPathResult.FIRST_ORDERED_NODE_TYPE
  ).singleNodeValue as HTMLSpanElement
  if (spanElement) {
    const newValue = Number(spanElement.textContent) - value
    spanElement.textContent = `${newValue}`
  } else {
    throw new Error('span with the number of videos in playlist not found in DOM')
  }
}

// We don't remove but only hide the videos since
// Youtube webapp use the indexes to handle some actions (remove, reorder)
// and removing videos from the DOM collide with that behavior
function hideVideosFromPlaylistUI(videosToDelete: PlaylistVideo[]) {
  // cast Node as any to access .data property availlable on ytd-playlist-video-renderer elements
  const playlistVideoRendererNodes = getElementsByXpath(XPATH.YT_PLAYLIST_VIDEO_RENDERERS) as any[]

  // All videos to remove MAY be present in the UI because if there is more videos to remove
  // than videos found into the UI, some removed videos aren't loaded in the UI
  if (playlistVideoRendererNodes.length >= videosToDelete.length) {
    // Get all our videosIds as keys of object to later match with DOM Elements in O1
    // To avoid multiples loop in loop
    const videoIdsMap: Record<string, HTMLElement | false> = {}
    for (const video of videosToDelete) {
      videoIdsMap[video.videoId] = false
    }
    // Match playlistVideoRendererNodes with videosIds
    let elementFound = 0
    for (const node of playlistVideoRendererNodes) {
      if (videoIdsMap[node.data.videoId] === false) {
        videoIdsMap[node.data.videoId] = node
        elementFound += 1
        // early break if all elements have already been found
        if (elementFound === videosToDelete.length) {
          break
        }
      }
    }
    // if all videos to remove are present in the UI
    if (elementFound === videosToDelete.length) {
      const htmlElements: HTMLElement[] = Object.values(videoIdsMap) as HTMLElement[]
      for (const element of htmlElements) {
        // hide each item from UI
        element.hidden = true
      }
      // decrement the total number of remaining videos in the playlist
      decrementNumberOfVideosInPlaylist(videosToDelete.length)
      return
    }
  }
  throw new Error('some videos are missing from the UI, cannot dynamically delete')
}
