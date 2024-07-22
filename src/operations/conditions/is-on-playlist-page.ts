import { Condition } from 'userscripter/lib/environment'

const PLAYLIST_URL_PATHNAME = '/playlist'

const isOnPlaylistPage: Condition = (window_: Window): boolean => {
  const url = new URL(window_.location.href)
  return url.pathname === PLAYLIST_URL_PATHNAME
}

export default isOnPlaylistPage
