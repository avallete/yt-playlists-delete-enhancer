// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

import U from './userscript'

export const NAME = U.sitename
export const HOSTNAME = U.hostname
export const APP_ROOT_ID = U.id
export const YT_LOCATION_CHANGE_EVENT: string = 'yt-navigate-finish'
