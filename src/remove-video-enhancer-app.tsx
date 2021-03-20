import { Component } from 'preact'
import RemoveVideoEnhancerContainer from './remove-video-enhancer-container'
import { YTConfigData } from './youtube'
import { removeVideosFromPlaylist, fetchAllPlaylistContent, Playlist, PlaylistVideo } from '~src/yt-api'
import partition from '~src/lib/partition'

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
    this.removeVideoHandler = this.removeVideoHandler.bind(this)
  }

  async componentDidMount() {
    try {
      const playlist = await fetchAllPlaylistContent(this.props.config, this.props.playlistName)
      this.setState({ playlist })
    } catch (error) {
      this.setState({ errorMessages: [error.message] })
    }
  }

  async removeVideoHandler(watchTimeValue: number) {
    const { playlist } = this.state
    if (playlist && playlist.continuations[0].videos.length > 0) {
      const [toDeleteVideos, toKeepVideos] = partition(
        playlist.continuations[0].videos,
        (v) => v.percentDurationWatched >= watchTimeValue
      )
      if (toDeleteVideos.length > 0) {
        try {
          await removeVideosFromPlaylist(this.props.config, playlist?.playlistId as string, toDeleteVideos)
          // TODO side effect dynamically remove videos from interface
          playlist.continuations[0].videos = toKeepVideos
          this.setState({ ...this.state, playlist })
        } catch (error) {
          this.setState({ ...this.state, errorMessages: [error.message] })
        }
      }
    }
  }

  render() {
    if (this.state?.errorMessages?.length) {
      return <div>${this.state?.errorMessages[0]}</div>
    }
    if (this.state?.playlist) {
      if (this.state.playlist.isEditable) {
        return <RemoveVideoEnhancerContainer removeVideoHandler={this.removeVideoHandler} />
      }
      return <div>Playlist isn't editable</div>
    }
    return <div>Loading...</div>
  }
}
