import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <div className="header" style={{width:"100%", background:'black'}}>
  <ul style={{display: 'flex', listStyle: 'none'}}>
   <li> <Link style={linkStyle} to="/">Home</Link> </li>
   <li> <Link style={linkStyle} to="/runs">Runs</Link> </li>



   </ul>
  </div>
)

const linkStyle = {
  color: 'white',
  fontSize: '3vh',
  margin: '0px 20px'
}
export default Header