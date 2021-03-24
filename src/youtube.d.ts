/**
 * List of types and defines useful for youtube webapp/api interaction
 */

// Add the ytcfg object to the global window
declare global {
  interface Window {
    ytcfg: {
      data_: any
    }
  }
}

export interface YTConfigData {
  DEVICE: string
  DELEGATED_SESSION_ID: string
  ID_TOKEN: string
  INNERTUBE_API_KEY: string
  INNERTUBE_CONTEXT_CLIENT_NAME: string
  INNERTUBE_CONTEXT_CLIENT_VERSION: string
  PAGE_BUILD_LABEL: string
  PAGE_CL: string
  VISITOR_DATA: string
  SAPISID: string
  ORIGIN_URL: string
}

export interface PlaylistVideo {
  videoId: string
  percentDurationWatched: number
}

export interface PlaylistContinuation {
  videos: PlaylistVideo[]
  continuationToken?: string
}

export interface Playlist {
  playlistId: string
  isEditable: boolean
  canReorder: boolean
  continuations: PlaylistContinuation[]
}
