import { Operation, operation } from 'userscripter/lib/operations'
import { ALWAYS, DOMCONTENTLOADED } from 'userscripter/lib/environment'
import addLocationChangeEventHooks from '~src/operations/actions/add-location-change-event-hook'
import isOnPlaylistPage from '~src/operations/actions/is-on-playlist-page'

const { main, cleanupDOM } = require('./yt-playlists-delete-enhancer')

function logIsOnPlaylist() {
  if (isOnPlaylistPage(window)) {
    const url = new URL(window.location.href)
    const playlistName = url.searchParams.get('list')
    main(playlistName)
    return
  }
  cleanupDOM()
}

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: 'init the userscript',
    condition: ALWAYS,
    action: () => {
      addLocationChangeEventHooks(logIsOnPlaylist)
    },
    deferUntil: DOMCONTENTLOADED,
  }),
]

export default OPERATIONS
