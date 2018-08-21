import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../home/home'


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.compWithProps = this.compWithProps.bind(this)
  }

  compWithProps() {
    return <Home trackEl={this.props.trackEl} play={this.props.play} tracks={this.props.tracks} />
  }

  render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={this.compWithProps}/>
          </Switch>
        </BrowserRouter>
      )
  }
}

export default Main
