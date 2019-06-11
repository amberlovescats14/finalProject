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
  }

  render() {
    console.log("trailDATA:", this.props.trailDATA)
    console.log("STATE:", this.state.data)
    

    console.log(this.props.trailDATA)
    return (
      <div>
        <h1>Trails</h1>
        <h2>{this.props.trailHeader}</h2>
      </div>
    )
  }
}
