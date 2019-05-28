import React from 'react'

const Home = (props) => {
 
    return (
      <div style={{background: 'red'}}>
        <h1>Home</h1>
        <div>{props.testNumber}</div>
        <button onClick={props.addA}>Add</button>
      </div>
    )
  
}

export default Home
