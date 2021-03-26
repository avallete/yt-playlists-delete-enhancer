import { render } from 'preact'
import getElementsByXpath from '~lib/get-elements-by-xpath'
import RemoveVideoEnhancerApp from '~components/remove-video-enhancer-app'
import { YTConfigData } from '~src/youtube'

export default function appendAppToDom(config: YTConfigData, playlistName: string, xpathRoot: string) {
  const elementToAppendTo = getElementsByXpath(xpathRoot)[0] as Element
  if (elementToAppendTo) {
    render(
      <RemoveVideoEnhancerApp config={config} playlistName={playlistName} />,
      elementToAppendTo,
      elementToAppendTo.lastElementChild as Element
    )
  } else {
    throw new Error(`Cannot found ${xpathRoot} in the DOM`)
  }
}
