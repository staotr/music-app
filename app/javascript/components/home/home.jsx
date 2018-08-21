import React from 'react'
import Tracks from './tracks/tracks'


class Home extends React.Component {
  render () {
    return <Tracks trackEl={this.props.trackEl} play={this.props.play} tracks={this.props.tracks}/>
  }
}

export default Home
