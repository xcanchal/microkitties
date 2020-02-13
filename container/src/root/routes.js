import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Breeds from '../components/breeds';

export default () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/breeds" />
    </Route>
    <Route exact path="/breeds" component={Breeds} />
    <Route path="*">{() => <h1>Meow! - Not found</h1>}</Route>
  </Switch>
);
