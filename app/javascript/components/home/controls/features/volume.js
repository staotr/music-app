import React from 'react'
import VolumeSlider from '../helpers/volumeSlider'

class Volume extends React.Component {

  render() {
    return <VolumeSlider changeVolume={this.props.changeVolume}/>
  }
}

export default Volume
