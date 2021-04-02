import { render } from 'preact'
import getElementsByXpath from '~lib/get-elements-by-xpath'
import RemoveVideoEnhancerApp from '~components/remove-video-enhancer-app'
import { YTConfigData } from '~src/youtube'

export default function appendAppToDom(config: YTConfigData, playlistName: string, xpathRoot: string) {
  const elementToAppendTo = getElementsByXpath(xpathRoot)[0] as Element
  if (elementToAppendTo) {
    render(
      // Use Date.now() to force re-mount component to trigger playlist fetch after yt-navigate-finish events
      // See: #62
      <RemoveVideoEnhancerApp key={Date.now()} config={config} playlistName={playlistName} />,
      elementToAppendTo,
      elementToAppendTo.lastElementChild as Element
    )
  } else {
    throw new Error(`Cannot found ${xpathRoot} in the DOM`)
  }
}
