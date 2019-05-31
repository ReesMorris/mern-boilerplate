import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Users from './components/users/Users';

const Routes = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
    </Switch>
  </Fragment>
);

export default Routes;
