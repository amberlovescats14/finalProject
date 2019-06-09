import React, { Component } from 'react'
import { Media, Card, Collapse, ResponsiveEmbed } from 'react-bootstrap'
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
      <div style={{background: '#111433', color: 'black'}} 
      className="container-fluid">
        <p>5K Races in San Antonio</p>
        <ul 
        style={{height: 'auto', width: '100vw'}}
        >
          {this.props.runDATA.map((item, i)=> {
            return  <li 
            className="mg-auto"
            key={i} 
            style={liStyle}>
              <Card>
              <Media>
                <img id="runIMG" 
                style={{width: '100px', height: '150px'}}
                src={item.logo.original.url} alt="runIMG" thumbnail/>
              <Media.Body>
                <p>{i +1}</p>
                <p id="title">{item.name.text}</p>
                <p>
                {moment(item.start.local).format('dddd, MMMM DD YYYY')}
                </p>
              </Media.Body>
              </Media>
              </Card>
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
              anchor: new google.maps.Point(32, 32),
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
  width: '400px',
  boxShadow:'0 0 10px #da363b',
  display: 'inline-block',
  listStyle: 'none'
}
// export default Runs
export default GoogleApiWrapper({
  apiKey: ("")
})(Runs)