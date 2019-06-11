import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './container/HomeContainer'
import RunsContainer from './container/RunContainer'
import TrailsContainer from './container/TrailsContainer';


export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route  path="/runs" component={RunsContainer}/>
      <Route  path="/trails" component={TrailsContainer}/>
    </Switch>
  )
}
