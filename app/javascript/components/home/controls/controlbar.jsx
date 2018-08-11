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
        <Display tracks={this.props.tracks} index={this.props.currentTrackIndex}/>
        <Upload update={this.props.update} />
        <Control isPlaying={this.props.isPlaying} play={this.props.play} pause={this.props.pause}/>
        <Volume changeVolume={this.props.changeVolume}/>
        <div className='seekContainer'>
          <Seeker audio={this.props.audio} />
        </div>
      </div>
    )
  }
}


export default ControlBar
