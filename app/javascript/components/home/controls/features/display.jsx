import React from 'react'

class Display extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      image: null,
      title: ''
    }
  }

  generateImageTag() {
    if (this.state.image != null) {
      return <img src={this.state.image}/>
    }
  }

  componentWillReceiveProps(props) {
    if (props.index != null) {
      this.setState({ title: props.tracks[props.index].title, image: props.tracks[props.index].image.url })
    }
  }

  render() {
    const songTitle = this.state.title
    const songImage = this.generateImageTag()
    return (
      <div className='songDisplay flex'>
        {songImage}
        <span>{songTitle}</span>
      </div>
    )
  }
}

export default Display
