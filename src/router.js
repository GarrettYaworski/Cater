import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

export default(
  <Switch>
    <Route component={ Home } exact path='/'></Route>
  </Switch>
)