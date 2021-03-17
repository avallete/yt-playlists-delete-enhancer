import { Operation, operation } from 'userscripter/lib/operations'
import { ALWAYS, DOMCONTENTLOADED } from 'userscripter/lib/environment'
import addLocationChangeEventHooks from '~src/operations/actions/add-location-change-event-hook'
import isOnPlaylistPage from '~src/operations/actions/is-on-playlist-page'

const { main, cleanupDOM } = require('./yt-playlists-delete-enhancer')

function mainWrapper() {
  const url = new URL(window.location.href)
  const playlistName = url.searchParams.get('list')
  main(playlistName)
}

function protectedMainWrapper() {
  if (isOnPlaylistPage(window)) {
    mainWrapper()
    return
  }
  cleanupDOM()
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
