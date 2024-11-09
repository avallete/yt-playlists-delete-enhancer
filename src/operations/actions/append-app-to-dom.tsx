import { render } from 'preact'
import getElementsByXpath from '~lib/get-elements-by-xpath'
import RemoveVideoEnhancerApp from '~components/remove-video-enhancer-app'
import { YTConfigData } from '~src/youtube'
import U from '~src/userscript'

export default function appendAppToDom(config: YTConfigData, playlistName: string, xpathRoot: string) {
  const existingElement = document.querySelector(`#${U.id}${playlistName}`)
  if (!existingElement) {
    const elementToAppendTo = getElementsByXpath(xpathRoot)
      // get only currently visibles elements because youtube hide elements instead of removing them from the DOM
      .find((element: any) => element.offsetHeight > 0 || element.offsetWidth > 0) as Element
    // Use Date.now() to force re-mount component to trigger playlist fetch after yt-navigate-finish events
    // See: #62

    const style = playlistName === 'WL' ? '' : 'position: absolute; bottom: -112px; color: white; width: 100%;'
    const AppContainer = (
      <div id={`${U.id}${playlistName}`} key={Date.now()} style={style}>
        <RemoveVideoEnhancerApp key={Date.now()} config={config} playlistName={playlistName} />
      </div>
    )

    if (!elementToAppendTo) {
      throw new Error(`Element with xpath ${xpathRoot} not found in the DOM`)
    }

    render(AppContainer, elementToAppendTo, elementToAppendTo.lastElementChild as Element)
  }
}
