import removeVideosFromPlaylist from '~src/operations/ui/remove-videos-from-playlist'
import decrementNumberOfVideosInPlaylist from '~src/operations/ui/decrement-number-of-videos-in-playlist'
import { PlaylistVideo } from '~src/youtube'

export function removeVideoFromPlaylistUI(videoId: string) {
  try {
    removeVideosFromPlaylist([{ videoId, percentDurationWatched: 100 }])
    decrementNumberOfVideosInPlaylist(1)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    // If an error occurs while trying to dynamically update the UI
    // reload the page to update the UI
    window.location.reload()
  }
}

export default function removeVideosFromPlaylistUI(toDeleteVideos: PlaylistVideo[]) {
  try {
    removeVideosFromPlaylist(toDeleteVideos)
    decrementNumberOfVideosInPlaylist(toDeleteVideos.length)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    // If an error occurs while trying to dynamically update the UI
    // reload the page to update the UI
    window.location.reload()
  }
}
