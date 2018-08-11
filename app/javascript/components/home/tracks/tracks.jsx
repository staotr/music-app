import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
class Tracks extends React.Component {

  listTracks() {
    return this.props.tracks.map((track) => {
        return (
          <Col className='trackContainer' xs={6} md={3} key={track.id}>
            <div className='albumCoverContainer'>
              <div className='playButtonLink flex'>
                <a onClick={() => { this.props.play(track.id) }}>
                  <i className='fas fa-play'></i>
                </a>
              </div>
                <img src={track.image.url} />
            </div>
          </Col>
        )
    })
  }

  render () {
    var tracks = this.listTracks()
    return (
      <Grid className='paddingTop75'>
        <Row className="show-grid">
            { tracks }
        </Row>
      </Grid>
    )
  }

}


export default Tracks
