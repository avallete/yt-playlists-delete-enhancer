import { Component } from 'preact'
import U from '~src/userscript'
import RemoveVideoEnhancerContainer from '~components/remove-video-enhancer-container'
import { YTConfigData, Playlist } from '~src/youtube'
import { removeVideosFromPlaylist, fetchAllPlaylistContent } from '~src/yt-api'
import partition from '~lib/partition'
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
          playlist.continuations[0].videos = toKeepVideos
          removeVideosFromPlaylistUI(toDeleteVideos)
          this.setState({ ...this.state, playlist })
        } catch (error) {
          this.setState({ ...this.state, errorMessages: [error.message] })
        }
      }
    }
  }

  shouldComponentUpdate(nextProperties: Properties) {
    if (nextProperties.playlistName !== this.state?.playlist?.playlistId) {
      return true
    }
    return false
  }

  async componentDidUpdate(previousProperties: Properties) {
    if (previousProperties.playlistName !== this.props.playlistName) {
      try {
        this.setState({ playlist: undefined, errorMessages: undefined })
        const playlist = await fetchAllPlaylistContent(this.props.config, this.props.playlistName)
        this.setState({ playlist })
      } catch (error) {
        this.setState({ errorMessages: [error.message] })
      }
    }
  }

  render() {
    if (this.state?.errorMessages?.length) {
      return <div id={U.id}>{this.state?.errorMessages.join(' ')}</div>
    }
    if (this.state?.playlist) {
      if (this.state.playlist.isEditable) {
        return <RemoveVideoEnhancerContainer removeVideoHandler={this.removeVideoHandler} />
      }
      return <div id={U.id}>Playlist isn't editable</div>
    }
    return <div id={U.id}>Loading...</div>
  }
}
