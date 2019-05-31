import React from 'react'
import './css/main.css';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


export default function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>App</h1>
      <Header />
      <Router />
    </div>
    </BrowserRouter>
  )
}

