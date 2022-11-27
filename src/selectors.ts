export const XPATH = {
  // We need two class selectors because youtube "custom playlist" and watch later have slightly different ui
  APP_RENDER_ROOT:
    '//div[@class="metadata-wrapper style-scope ytd-playlist-header-renderer" or @class="style-scope ytd-playlist-sidebar-primary-info-renderer"]',
  YT_PLAYLIST_VIDEO_RENDERERS: '//ytd-playlist-video-renderer',
  YT_PLAYLIST_VIDEO_MENU: '//ytd-playlist-video-renderer//div[@id="menu"]',
  YT_NUMBER_OF_VIDEOS_IN_PLAYLIST: '//ytd-playlist-byline-renderer//div/yt-formatted-string/span[1]',
}

export default {
  XPATH,
}
