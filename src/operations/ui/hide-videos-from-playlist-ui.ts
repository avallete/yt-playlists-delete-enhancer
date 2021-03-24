import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'
import listMapSearch from '~src/lib/list-map-search'
import { PlaylistVideo } from '~src/youtube'

// We don't remove but only hide the videos since
// Youtube webapp use the indexes to handle some actions (remove, reorder)
// and removing videos from the DOM collide with that behavior
export default function hideVideosFromPlaylistUI(videosToDelete: PlaylistVideo[]) {
  // cast Node as any to access .data property availlable on ytd-playlist-video-renderer elements
  const playlistVideoRendererNodes = getElementsByXpath(XPATH.YT_PLAYLIST_VIDEO_RENDERERS) as any[]
  // All videos to remove MAY be present in the UI because if there is more videos to remove
  // than videos found into the UI, some removed videos aren't loaded in the UI
  if (playlistVideoRendererNodes.length >= videosToDelete.length) {
    const searchMap = listMapSearch(
      videosToDelete,
      playlistVideoRendererNodes,
      (video) => video.videoId,
      (node) => node.data.videoId
    )
    // if all videos to remove are present in the UI
    if (searchMap) {
      const htmlElements: HTMLElement[] = Object.values(searchMap) as HTMLElement[]
      for (const element of htmlElements) {
        // hide each item from UI
        element.hidden = true
      }
      return
    }
  }
  throw new Error('some videos are missing from the UI, cannot dynamically delete')
}
