import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Search from './Search';
import Model from './Model';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/make/model/:id' component={Model}/>
    </Switch>
  </main>
)

export default Main;
