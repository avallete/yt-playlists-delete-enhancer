import removeVideosFromPlaylist from '~src/operations/ui/remove-videos-from-playlist'
import decrementNumberOfVideosInPlaylist from '~src/operations/ui/decrement-number-of-videos-in-playlist'
import { Playlist, PlaylistVideo } from '~src/youtube'

export default function removeVideosFromPlaylistUI(playlist: Playlist, toDeleteVideos: PlaylistVideo[]) {
  try {
    removeVideosFromPlaylist(playlist, toDeleteVideos)
    decrementNumberOfVideosInPlaylist(toDeleteVideos.length)
  } catch {
    // If an error occurs while trying to dynamically update the UI
    // reload the page to update the UI
    window.location.reload()
  }
}
