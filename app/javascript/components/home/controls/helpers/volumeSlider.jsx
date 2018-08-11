import React from 'react'

class VolumeSlider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mousePressed: false,
      originalPos: 0,
      volume: 100,
    }

    this.handleSliderMovement = this.handleSliderMovement.bind(this)
  }

  componentDidMount() {
    document.getElementById('slide').style.left = '50px'
  }

  handleSliderMovement(e) {
    // convert style from px to int
    const sliderPos = parseInt(e.target.style.left)

    this.setState({ mousePressed: true, originalPos: e.clientX })

    e.target.onmouseup = (e) => {
      this.setState({ mousePressed: false, originalPos: e.clientX })
    }

    e.target.onmouseout = (e) => {
      this.setState({ mousePressed: false })
    }

    e.target.onmousemove = (e, sliderPosition) => {
      if (this.state.mousePressed == true) {
        const difference = this.state.originalPos - e.clientX
        const newSliderPosX = sliderPos - difference
        if (newSliderPosX >= 0 && newSliderPosX <= 50) {
          e.target.style.left = newSliderPosX.toString() + 'px'
          this.setState({ volume: newSliderPosX * 2 })
        }
      }
    }

  }

  formatForVolume(volume) {
    return volume / 100
  }

  componentDidUpdate() {
    this.props.changeVolume(this.formatForVolume(this.state.volume))
  }

  render() {
    return (
      <div className='volumeContainer'>
        <div className='bar'><div style={{ width: `${this.state.volume}%` }} className='level'></div></div>
        <div id='slide' onMouseDown={this.handleSliderMovement} className='slider'></div>
      </div>
    )
  }
}

export default VolumeSlider
