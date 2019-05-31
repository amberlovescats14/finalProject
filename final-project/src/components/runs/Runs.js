import React, { Component } from 'react'
import moment from 'moment'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
const google = window.google = window.google ? window.google : {}

export class Runs extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  componentDidMount = () => {
    this.props.getRuns()
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};
  
  render() {
    console.log(this.props.runDATA)
    console.log("location:" + this.props.location[1].lat)
    return (
      <div style={{background: '#0087bf'}}>
        <p style={{color: 'yellow', fontSize: '7vh', fontWeight: '800'}}>5K Races in San Antonio</p>
        <ul>
        {this.props.runDATA.map((item, i)=> {
          let count = 0
          return <li key={i} style={liStyle}>
          <h1>{i +1}</h1>
          <h1 id="title">{item.name.text}</h1>
          <h2>{moment(item.start.local).format('dddd, MMMM DD YYYY')}</h2>
          <img id="runIMG" style={{width: '60%', height: '70%'}}src={item.logo.original.url} alt="runIMG"/>

          </li>
        })}
    
    </ul>
        


      <Map google={this.props.google} zoom={11}
        initialCenter = {{
          lat: 29.424122,
          lng: -98.493629
        }}
        onClick={this.onMapClicked}
      >
 
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

        {this.props.location.map((item, i)=> {
           return  <Marker
            title={item.title}
            name={item.name}
            position={item.position}
            icon={{
              url: "http://www.clker.com/cliparts/f/h/3/4/l/K/runner-md.png" ,
              scaledSize: new google.maps.Size(35,35),
              
              
              
            }}
            onClick={this.onMarkerClick}
            key={i}
            />
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

      </div>
    )
  }
}
const liStyle = {
  margin: '10px',
  width: '40%',
  height: '300px',
  display: 'inline-block',
  border: '2px solid white',
  color: 'yellow'
}
// export default Runs
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBuiLu4LttTKbx5-lC8TP3liU58ern2C7A")
})(Runs)