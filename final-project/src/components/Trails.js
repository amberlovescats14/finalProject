import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react'
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
        {this.props.trailDATA.map(item => {
          return item.geometry.paths.forEach((arr, i) => {
            console.log(arr[0], arr[1])
            let cordinates = []
            cordinates.push({m: arr[0], z: arr[1]})
            console.log("CORDINATES:" ,cordinates)
            return <Polyline 
            path={cordinates}
            geodesic= {false}
            strokeColor= 'rgb(32, 44, 45)'
            strokeWeight= {2}
            strokeOpacity ={0.8}
             />


          })
          // console.log("IN THE MAP:", item.geometry.paths)
        })}


      </Map>

        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(Trails)
