import React from 'react'
import { Link } from 'react-router-dom'
import './sass/header.css'
import { Breadcrumb} from 'react-bootstrap'


const Header = () => (
 

  <div className="header" >
  
  <Breadcrumb>
  <Breadcrumb.Item href="#"
  className="text-dark" active>
  <Link className="links" to="/">Home</Link>
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  <img src="https://is.gd/uPkPFF" alt="icon"/>
  <Link className="links" to="/runs">Runs</Link>
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">
  <Link className="links" to="/trails">Trails</Link>
  </Breadcrumb.Item>
  </Breadcrumb>

  </div>
)

const linkStyle = {
  color: '#111433',
  fontSize: '3vh',
  margin: '0px 20px'
}
export default Header