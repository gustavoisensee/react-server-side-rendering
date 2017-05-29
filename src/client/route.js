import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from './modules/home/component';
import LoginComponent from './modules/login/component';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route component={HomeComponent} />
  </Switch>
);

export default Routes;
