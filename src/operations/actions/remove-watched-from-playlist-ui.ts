import getElementsByXpath from '~src/lib/get-elements-by-xpath'
import { XPATH } from '~src/selectors'

export default function removeWatchedFromPlaylistUI(videoId: string) {
  const playlistVideoRendererNodes = getElementsByXpath(XPATH.YT_PLAYLIST_VIDEO_RENDERERS) as any[]

  for (const video of playlistVideoRendererNodes) {
    if (video.data.videoId === videoId) {
      video.querySelector('#overlays ytd-thumbnail-overlay-resume-playback-renderer').remove()
    }
  }
}
