import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
const google = window.google = window.google ? window.google : {}



class Trails extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount = () => {
    this.props.getTrails()
  }

  render() {

    return (
      <div>
        <h1>Trails</h1>
        <h2>{this.props.trailHeader}</h2>

        <Map google={this.props.google} zoom={11}
        initialCenter = {{
          lat: 29.424122,
          lng: -98.493629
        }}
        onClick={this.onMapClicked}
        >
 

      </Map>

        
        {/* {this.props.trailDATA.map(item => {

          console.log("IN THE MAP:", item.geometry)
        })} */}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(Trails)
