import hideVideosFromPlaylistUi from '~src/operations/ui/hide-videos-from-playlist-ui'
import decrementNumberOfVideosInPlaylist from '~src/operations/ui/decrement-number-of-videos-in-playlist'
import { PlaylistVideo } from '~src/youtube'

export default function removeVideosFromPlaylistUI(toDeleteVideos: PlaylistVideo[]) {
  try {
    hideVideosFromPlaylistUi(toDeleteVideos)
    decrementNumberOfVideosInPlaylist(toDeleteVideos.length)
  } catch {
    // If an error occurs while trying to dynamically update the UI
    // reload the page to update the UI
    window.location.reload()
  }
}