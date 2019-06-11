import React, { Component } from 'react'



export default class Trails extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount = () => {
    this.props.getTrails()
    this.loop()
  }

  loop = () => {
    let arr = []
     for(let i=0; i<10; i++){
     arr.push(this.props.trailDATA[i])
   }
    this.setState({ data: [...arr] });
   }
  render() {
    console.log("trailDATA:", this.props.trailDATA)
    console.log("STATE:", this.state.data)
    

    return (
      <div>
        <h1>Trails</h1>
        <h2>{this.props.trailHeader}</h2>
      </div>
    )
  }
}
