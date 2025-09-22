export const XPATH = {
  // We need two class selectors because youtube "custom playlist" and watch later have slightly different ui
  APP_RENDER_ROOT:
    '//div[@class="metadata-wrapper style-scope ytd-playlist-header-renderer" or @class="page-header-view-model-wiz__page-header-headline-info"]',
  YT_PLAYLIST_VIDEO_RENDERERS: '//ytd-playlist-video-renderer',
  YT_PLAYLIST_VIDEO_MENU: '//ytd-playlist-video-renderer//div[@id="menu"]',
  YT_NUMBER_OF_VIDEOS_IN_PLAYLIST: '//ytd-playlist-byline-renderer//div/yt-formatted-string/span[1] | (//span[contains(@class, "yt-core-attributed-string")][contains(., "video")])[2]',
  YT_SIDEBAR_CONTAINER: '//div[@class="immersive-header-content style-scope ytd-playlist-header-renderer"]',
}

export default {
  XPATH,
}
