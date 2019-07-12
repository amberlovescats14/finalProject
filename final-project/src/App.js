import React from 'react'
import './css/main.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
    <div 
    style={{background: '#da363b', color: 'white'}}>
      <h1
      style={h1Style}>Amber Jones</h1>
      <Header />
      <Router />
    </div>
    </BrowserRouter>
  )
}

const h1Style = {
  color: '#202c2d',
// background: '#FFFFFF',
textShadow: "0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5"
}