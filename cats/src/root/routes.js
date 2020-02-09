import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CatsList from '../components/cats-list';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/Cats"component={CatsList} />
      <Route path="*">{() => <h1>Not found</h1>}</Route>
    </Switch>
  </Router>
);
