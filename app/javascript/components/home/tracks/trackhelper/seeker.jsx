import React from 'react'

class Seeker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      audio: null,
      percent: 0
    }
    this.updateBarProgress = this.updateBarProgress.bind(this)
  }

  updateBarProgress(audio) {
    if (audio != null) {
      audio.ontimeupdate = (e) => {
        const percentage = (e.currentTarget.currentTime / e.currentTarget.duration) * 100
        this.setState({ percent: percentage })
      }
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ audio: props.audio })
  }

  componentDidUpdate() {
    this.updateBarProgress(this.state.audio)
  }

  render() {
    return (
      <div className='trackBar'><div style={{ width: `${this.state.percent}%` }} className='progressBar'></div></div>
    )
  }
}

export default Seeker
