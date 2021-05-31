import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'

// Decrement the numbers of videos in the playlist in the UI
export default function decrementNumberOfVideosInPlaylist(value: number) {
  const spanElement: HTMLSpanElement = getElementsByXpath(XPATH.YT_NUMBER_OF_VIDEOS_IN_PLAYLIST)[0] as HTMLSpanElement
  if (spanElement) {
    const newValue = Number(spanElement.textContent) - value
    spanElement.textContent = `${newValue}`
  } else {
    const spanElementOneVideo: HTMLSpanElement = getElementsByXpath(
      XPATH.YT_NUMBER_OF_VIDEOS_IN_PLAYLIST_ONE_VIDEO
    )[0] as HTMLSpanElement
    if (spanElementOneVideo) {
      // A reload is performed to properly restore the state of an empty playlist:
      // - The "There are no videos in this playlist yet" text
      // - The "No videos" text
      // Both strings are not part of the `yt.msgs_` object to use for localization
      window.location.reload()
    } else {
      throw new Error('span with the number of videos in playlist not found in DOM')
    }
  }
}
