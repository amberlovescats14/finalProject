import React, { Component } from 'react'

export class Runs extends Component {
  constructor(props){
    super(props)
    this.state = {
      runAPI: [],
      isLoaded: false
    }
  }
  componentDidMount = () => {

    fetch('https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=30mi&categories=108&subcategories=8001&token=KXBIEIL3SS3GWKDXSU7F')
    .then(response => response.json())
     .then(data => {
       console.log(data)
       this.setState({ runAPI: data.events, isLoaded: true  });
         
         })
  }
  render() {
    return (
      <div style={{background: 'blue'}}>
        <p style={{color: 'yellow', fontSize: '7vh', fontWeight: '800'}}>5K Races in San Antonio</p>
        <ul>
        {this.state.runAPI.map((item, i)=> {
          return <li style={liStyle}>
          <h1>{item.name.html}</h1>
          <img style={{width: '50%', height: '70%'}}src={item.logo.original.url}/>
          </li>
        })}
    
    </ul>
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
export default Runs
