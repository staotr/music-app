import React from 'react'
import Main from './layout/main'
import Header from './layout/header'
import ControlBar from './home/controls/controlbar'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tracks: [],
      currentTrack: null,
      currentAudio: null,
      isPlaying: null,
      playElement: null
    }

    this.playTrack = this.playTrack.bind(this)
    this.playCurrent = this.playCurrent.bind(this)
    this.stopCurrent = this.stopCurrent.bind(this)
    this.getTrackData = this.getTrackData.bind(this)
    this.updateTrackList = this.updateTrackList.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
    this.trackElement = this.trackElement.bind(this)
  }

  componentDidMount() {
    this.getTrackData()
  }

  getTrackData() {
    fetch('/api/v1/tracks.json')
    .then((res) => { return res.json() })
    .then((value) => {
      this.setState({ tracks: value })
    })
  }

  playCurrent() {
    if (this.state.currentAudio != null) {
      this.state.currentAudio.play()
      this.setState({ isPlaying: true })
    }
  }

  stopCurrent() {
    if (this.state.currentAudio != null) {
      this.state.currentAudio.pause()
      this.setState({ isPlaying: false })
    }
  }

  playTrack(id) {
    const index = id - 1
    if (this.state.currentAudio == null) {
      const track = this.state.tracks[index]
      var audio = new Audio(track.audio.url)
      this.setState({ currentTrack: index, currentAudio: audio, isPlaying: true })
      audio.play()
    } else {
      const track = this.state.tracks[index]
      const oldAudio = this.state.currentAudio
      oldAudio.pause()
      var audio = new Audio(track.audio.url)
      this.setState({ currentTrack: index, currentAudio: audio, isPlaying: true })
      audio.play()
    }
  }

  updateVolume(volume) {
    if (this.state.currentAudio != null) {
      this.state.currentAudio.volume = volume
    }
  }

  updateTrackList() {
    this.getTrackData()
  }

  trackElement(e) {
    if (this.state.playElement == null) {
      e.target.classList.toggle("fa-play")
      e.target.classList.toggle("fa-pause")
      this.setState({ playElement: e.target })
    }

    if (this.state.playElement != null) {
      // get existing tag in state and toggle class
      this.state.playElement.classList.toggle("fa-play")
      this.state.playElement.classList.toggle("fa-pause")

      // toggle class for new audio track to be played
      e.target.classList.toggle("fa-play")
      e.target.classList.toggle("fa-pause")

      // set new audio play element as current element
      this.setState({ playElement: e.target })
    }

  }

  render () {
    return (
      <div>
        <Header/>
        <Main trackEl={this.trackElement} play={this.playTrack} tracks={this.state.tracks}/>
        <ControlBar
          currentTrackIndex={this.state.currentTrack}
          audio={this.state.currentAudio}
          changeVolume={this.updateVolume}
          isPlaying={this.state.isPlaying}
          update={this.updateTrackList}
          play={this.playCurrent}
          pause={this.stopCurrent}
          tracks={this.state.tracks}/>
      </div>
    )
  }
}

export default App
