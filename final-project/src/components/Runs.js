import React, { Component } from 'react'


export class Runs extends Component {
  componentDidMount = () => {
    this.props.getRuns()
  }
  render() {
    console.log(this.props.runDATA)
    return (
      <div style={{background: 'blue'}}>
        <p style={{color: 'yellow', fontSize: '7vh', fontWeight: '800'}}>5K Races in San Antonio</p>
        <ul>
        {this.props.runDATA.map((item, i)=> {
          return <li key={i} style={liStyle}>
          <h1>{item.name.html}</h1>
          <img style={{width: '60%', height: '70%'}}src={item.logo.original.url} alt="runIMG"/>
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
