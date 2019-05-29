import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './container/HomeContainer'
import RunsContainer from './container/RunContainer'


export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route  path="/runs" component={RunsContainer}/>
    </Switch>
  )
}
