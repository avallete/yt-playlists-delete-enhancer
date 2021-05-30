import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'
import listMapSearch from '~src/lib/list-map-search'
import { Playlist, PlaylistVideo } from '~src/youtube'

function removeVideoWithYtAction(playlist: Playlist, videoId: String) {
  document.dispatchEvent(
    new CustomEvent('yt-action', {
      detail: {
        actionName: 'yt-service-request',
        args: [
          undefined,
          {
            playlistEditEndpoint: {
              clientActions: [{ playlistRemoveVideosAction: { setVideoIds: [videoId] } }],
              playlistId: playlist.playlistId,
            },
          },
        ],
        returnValue: [],
      },
    })
  )
}

export default function removeVideosFromPlaylist(playlist: Playlist, videosToDelete: PlaylistVideo[]) {
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
      const htmlElements = Object.values(searchMap)
      for (const element of htmlElements) {
        // eslint-disable-next-line no-underscore-dangle
        const videoId = element.__data.data.setVideoId
        removeVideoWithYtAction(playlist, videoId)
      }
      return
    }
  }
  throw new Error('some videos are missing from the UI, cannot dynamically delete')
}
