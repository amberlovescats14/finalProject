import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './container/HomeContainer'
import Runs from './components/Runs'


export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route  path="/runs" component={Runs}/>
    </Switch>
  )
}
