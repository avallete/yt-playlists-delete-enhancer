import { Component } from 'preact'
import LinearProgress from 'preact-material-components/LinearProgress'
import RemoveVideoEnhancerContainer from '~components/remove-video-enhancer-container'
import { YTConfigData, Playlist } from '~src/youtube'
import { removeWatchHistoryForVideo, removeVideosFromPlaylist, fetchAllPlaylistContent } from '~src/yt-api'
import partition from '~lib/partition'
import removeWatchedFromPlaylistUI from '~src/operations/actions/remove-watched-from-playlist-ui'
import removeVideosFromPlaylistUI from '~src/operations/actions/remove-videos-from-playlist-ui'

interface Properties {
  config: YTConfigData
  playlistName: string
}

interface State {
  playlist?: Playlist
  errorMessages?: string[]
}

export default class RemoveVideoEnhancerApp extends Component<Properties, State> {
  constructor(properties: Properties) {
    super(properties)
    this.state = {}
    this.removeVideoWatchedPercentHandler = this.removeVideoWatchedPercentHandler.bind(this)
    this.resetVideoHandler = this.resetVideoHandler.bind(this)
    this.removeVideoHandler = this.removeVideoHandler.bind(this)
  }

  async componentDidMount() {
    try {
      const playlist = await fetchAllPlaylistContent(this.props.config, this.props.playlistName)
      this.setState({ playlist })
    } catch (error) {
      this.setState({ errorMessages: [(error as Error).message] })
    }
  }

  async resetVideoHandler(videoId: string) {
    try {
      await removeWatchHistoryForVideo(videoId)
      removeWatchedFromPlaylistUI(videoId)
      const { playlist } = this.state
      if (playlist) {
        for (const v of playlist.continuations[0].videos) {
          if (v.videoId === videoId) {
            v.percentDurationWatched = 0
          }
        }
      } else {
        throw new Error('Playlist not found')
      }
    } catch (error) {
      this.setState({ ...this.state, errorMessages: [(error as Error).message] })
    }
  }

  async removeVideoWatchedPercentHandler(watchTimeValue: number) {
    const { playlist } = this.state
    if (playlist && playlist.continuations[0].videos.length > 0) {
      const [toDeleteVideos, toKeepVideos] = partition(
        playlist.continuations[0].videos,
        (v) => v.percentDurationWatched >= watchTimeValue,
      )
      if (toDeleteVideos.length > 0) {
        try {
          await removeVideosFromPlaylist(playlist?.playlistId as string, toDeleteVideos)
          playlist.continuations[0].videos = toKeepVideos
          removeVideosFromPlaylistUI(toDeleteVideos)
          this.setState({ ...this.state, playlist })
        } catch (error) {
          this.setState({ ...this.state, errorMessages: [(error as Error).message] })
        }
      }
    }
  }

  async removeVideoHandler(videoId: string) {
    const { playlist } = this.state
    if (playlist && playlist.continuations[0].videos.length > 0) {
      const [toDeleteVideos, toKeepVideos] = partition(playlist.continuations[0].videos, (v) => v.videoId === videoId)
      if (toDeleteVideos.length > 0) {
        try {
          await removeVideosFromPlaylist(playlist?.playlistId as string, toDeleteVideos)
          playlist.continuations[0].videos = toKeepVideos
          removeVideosFromPlaylistUI(toDeleteVideos)
          this.setState({ ...this.state, playlist })
        } catch (error) {
          this.setState({ ...this.state, errorMessages: [(error as Error).message] })
        }
      }
    }
  }

  shouldComponentUpdate(nextProperties: Properties) {
    return nextProperties.playlistName !== this.state?.playlist?.playlistId
  }

  async componentDidUpdate(previousProperties: Properties) {
    if (previousProperties.playlistName !== this.props.playlistName) {
      try {
        this.setState({ playlist: undefined, errorMessages: undefined })
        const playlist = await fetchAllPlaylistContent(this.props.config, this.props.playlistName)
        this.setState({ playlist })
      } catch (error) {
        this.setState({ errorMessages: [(error as Error).message] })
      }
    }
  }

  render() {
    if (this.state?.errorMessages?.length) {
      return <div>{this.state?.errorMessages.join(' ')}</div>
    }
    if (this.state?.playlist) {
      if (this.state.playlist.isEditable) {
        return (
          <RemoveVideoEnhancerContainer
            removeVideoWatchedPercentHandler={this.removeVideoWatchedPercentHandler}
            resetVideoHandler={this.resetVideoHandler}
            removeVideoHandler={this.removeVideoHandler}
          />
        )
      }
      return <div>Playlist isn't editable</div>
    }
    return (
      <div>
        <LinearProgress indeterminate />
      </div>
    )
  }
}
