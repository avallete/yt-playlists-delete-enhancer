import U from '~src/userscript'

export const XPATH = {
  YT_PLAYLIST_SIDEBAR_ITEMS: '//ytd-playlist-sidebar-renderer/div[@id="items"]',
  YT_PLAYLIST_VIDEO_RENDERERS: '//yt-playlist-video-renderer',
  YT_NUMBERS_OF_VIDEOS_IN_PLAYLIST: '//ytd-playlist-sidebar-primary-info-renderer/div/yt-formatted-string/span[1]',
}

export const ID = {
  APP_ROOT: `${U.id}-root`,
}
