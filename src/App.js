import React from 'react';
import Cart from './Container/Cart/Cart'

import {Route, Link, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './hoc/Layout/Layout'


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/account' />
        <Route path='/order'> order</Route>
        <Route path='/cart' component={Cart}/>
        <Route path='/prime'> Prime</Route>
        <Route path='/signin'> SignIn</Route>
        <Route path='/' component={Home}/>
      </Switch>
    </Layout>

  );
}

export default App;
