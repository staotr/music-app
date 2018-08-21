import React from 'react'
import Upload from './features/upload'
import Control from './features/control'
import Volume from './features/volume'
import Display from './features/display'
import Seeker from '../tracks/trackhelper/seeker'

class ControlBar extends React.Component {

  render() {
    return (
      <div className='controlBar'>
        <Upload update={this.props.update} />
        <Display tracks={this.props.tracks} index={this.props.currentTrackIndex}/>
        <Control isPlaying={this.props.isPlaying} play={this.props.play} pause={this.props.pause}/>
        <Volume changeVolume={this.props.changeVolume}/>
        <Seeker audio={this.props.audio} />
      </div>
    )
  }
}


export default ControlBar
