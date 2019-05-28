import React from 'react'

const Home = (props) => {
//  console.log("in home: " + props.testNumber)
    return (
      <div style={{background: 'red'}}>
        <h1>Home</h1>
        <div style={{border: '2px solid green'}}>{props.testNumber}</div>
        <button onClick={props.increaseCount}>Add</button>
      </div>
    )
  
}

export default Home
