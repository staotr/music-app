/*
Houses Music player controls with functions passed down from app.js
*/

import React from 'react'

class Control extends React.Component {

  changeStyle() {
    if (this.props.isPlaying == true) {
      return [<a onClick={ () => { this.props.play() } }><i className='fas fa-play icon active'></i></a>,<a onClick={ () => { this.props.pause() } }><i className='fas fa-pause icon'></i></a>]
    }

    if (this.props.isPlaying == false) {
      return [<a onClick={ () => { this.props.play() } }><i className='fas fa-play icon'></i></a>,<a onClick={ () => { this.props.pause() } }><i className='fas fa-pause icon active'></i></a>]
    }

    return [<a onClick={ () => { this.props.play() } }><i className='fas fa-play icon'></i></a>,<a onClick={ () => { this.props.pause() } }><i className='fas fa-pause icon'></i></a>]
  }

  render() {
    const body = this.changeStyle()
    return (
      <ul className='controlList'>
        <li>
          {body[0]}
        </li>
        <li>
          {body[1]}
        </li>
      </ul>
    )
  }
}

export default Control
