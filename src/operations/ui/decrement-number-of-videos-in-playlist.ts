import { XPATH } from '~src/selectors'
import getElementsByXpath from '~src/lib/get-elements-by-xpath'

// Decrement the numbers of videos in the playlist in the UI
export default function decrementNumberOfVideosInPlaylist(value: number) {
  const spanElement: HTMLSpanElement = getElementsByXpath(XPATH.YT_NUMBERS_OF_VIDEOS_IN_PLAYLIST)[0] as HTMLSpanElement
  if (spanElement) {
    const newValue = Number(spanElement.textContent) - value
    spanElement.textContent = `${newValue}`
  } else {
    throw new Error('span with the number of videos in playlist not found in DOM')
  }
}
