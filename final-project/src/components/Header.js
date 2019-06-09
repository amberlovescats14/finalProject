import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb} from 'react-bootstrap'


const Header = () => (
  <div className="header" style={{width:"100%", background:'#da363b'}}>
  {/* <ul style={{display: 'flex', listStyle: 'none'}}>
   <li> <Link style={linkStyle} to="/">Home</Link> </li>
   <li> <Link style={linkStyle} to="/runs">Runs</Link> </li> */}

   <Breadcrumb>
  <Breadcrumb.Item href="#"
  className="text-dark" active>
  <Link style={linkStyle} to="/">Home</Link>
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  <img src="https://is.gd/uPkPFF" alt="icon"
  style={{width: '40px', height: '40px'}}/>
  <Link style={linkStyle} to="/runs">Runs</Link>
  </Breadcrumb.Item>
  </Breadcrumb>



   {/* </ul> */}
  </div>
)

const linkStyle = {
  color: '#111433',
  fontSize: '3vh',
  margin: '0px 20px'
}
export default Header