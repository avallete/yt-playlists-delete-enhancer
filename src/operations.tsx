import { render } from 'preact'
import { Operation, operation } from 'userscripter/lib/operations'
import { ALWAYS, DOMCONTENTLOADED } from 'userscripter/lib/environment'
import { get as CookieGet } from 'js-cookie'
import U from '~src/userscript'
import { YTConfigData } from '~src/youtube'
import addLocationChangeEventHooks from '~src/operations/actions/add-location-change-event-hook'
import isOnPlaylistPage from '~src/operations/actions/is-on-playlist-page'
import { XPATH } from '~src/selectors'
import RemoveVideoEnhancerApp from '~src/remove-video-enhancer-app'

function appendAppRoot() {
  const container = document.evaluate(
    XPATH.YT_PLAYLIST_SIDEBAR_ITEMS,
    document,
    undefined,
    XPathResult.FIRST_ORDERED_NODE_TYPE
  ).singleNodeValue
  const appRoot = document.createElement('div')
  appRoot.id = U.id
  container?.appendChild(appRoot)
  return appRoot
}

function mainWrapper() {
  const url = new URL(window.location.href)
  const playlistName = url.searchParams.get('list') as string
  /* eslint-disable no-underscore-dangle */
  const config: YTConfigData = {
    DEVICE: window.ytcfg.data_.DEVICE,
    DELEGATED_SESSION_ID: window.ytcfg.data_.DELEGATED_SESSION_ID,
    ID_TOKEN: window.ytcfg.data_.ID_TOKEN,
    INNERTUBE_API_KEY: window.ytcfg.data_.INNERTUBE_API_KEY,
    INNERTUBE_CONTEXT_CLIENT_NAME: window.ytcfg.data_.INNERTUBE_CONTEXT_CLIENT_NAME,
    INNERTUBE_CONTEXT_CLIENT_VERSION: window.ytcfg.data_.INNERTUBE_CONTEXT_CLIENT_VERSION,
    PAGE_BUILD_LABEL: window.ytcfg.data_.PAGE_BUILD_LABEL,
    PAGE_CL: window.ytcfg.data_.PAGE_CL,
    VISITOR_DATA: window.ytcfg.data_.VISITOR_DATA,
    SAPISID: CookieGet('SAPISID') as string,
    ORIGIN_URL: new URL(document.URL).origin,
  }
  /* eslint-enable no-underscore-dangle */
  const appRoot = appendAppRoot()
  render(<RemoveVideoEnhancerApp config={config} playlistName={playlistName} />, appRoot)
}

function protectedMainWrapper() {
  if (isOnPlaylistPage(window)) {
    mainWrapper()
  }
}

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: 'run main if the script start on playlist page',
    condition: isOnPlaylistPage,
    action: () => {
      mainWrapper()
    },
    deferUntil: DOMCONTENTLOADED,
  }),
  operation({
    description: 'init yt-navigate-finish hooks to watch in-app navigation',
    condition: ALWAYS,
    action: () => {
      addLocationChangeEventHooks(protectedMainWrapper)
    },
    deferUntil: DOMCONTENTLOADED,
  }),
]

export default OPERATIONS
