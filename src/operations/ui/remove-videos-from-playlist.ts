import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'
import listMapSearch from '~src/lib/list-map-search'
import { PlaylistVideo } from '~src/youtube'

function removeVideoWithYtAction(videoId: String) {
  document.dispatchEvent(
    new CustomEvent('yt-action', {
      detail: {
        actionName: 'yt-playlist-remove-videos-action',
        args: [
          {
            playlistRemoveVideosAction: {
              setVideoIds: [videoId],
            },
          },
        ],
        returnValue: [],
      },
    })
  )
}

export default function removeVideosFromPlaylist(videosToDelete: PlaylistVideo[]) {
  // cast Node as any to access .data property availlable on ytd-playlist-video-renderer elements
  const playlistVideoRendererNodes = getElementsByXpath(XPATH.YT_PLAYLIST_VIDEO_RENDERERS) as any[]
  // All videos to remove MAY be present in the UI because if there is more videos to remove
  // than videos found into the UI, some removed videos aren't loaded in the UI
  const uniqueVideosToDelete = [...new Map(videosToDelete.map((item) => [item.videoId, item])).values()]
  if (playlistVideoRendererNodes.length >= videosToDelete.length) {
    const searchMap = listMapSearch(
      uniqueVideosToDelete,
      playlistVideoRendererNodes,
      (video) => video.videoId,
      (node) => node.data.videoId
    )
    // if all videos to remove are present in the UI
    if (searchMap) {
      const htmlElements = Object.values(searchMap)
      for (const element of htmlElements) {
        // eslint-disable-next-line no-underscore-dangle
        const videoId = element.__data.data.setVideoId
        removeVideoWithYtAction(videoId)
      }
      return
    }
  }
  throw new Error('some videos are missing from the UI, cannot dynamically delete')
}
