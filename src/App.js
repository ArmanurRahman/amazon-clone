import React from 'react';

import {Route, Link, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {
  return (
    <Switch>
      <Route path='/account' />
      <Route path='/order'> order</Route>
      <Route path='/cart'> cart</Route>
      <Route path='/prime'> Prime</Route>
      <Route path='/signin'> SignIn</Route>
      <Route path='/' component={Home}/>
    </Switch>
  );
}

export default App;
