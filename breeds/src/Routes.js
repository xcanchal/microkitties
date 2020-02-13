import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Breeds from './Breeds';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/breeds" />
    </Route>
    <Route exact path="/breeds" component={Breeds} />
  </Switch>
);

export default Routes;