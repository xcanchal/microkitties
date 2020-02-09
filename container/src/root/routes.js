import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cats from '../components/cats';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <h1>Home</h1>} />
      <Route exact path="/cats" component={Cats} />
      <Route path="*">{() => <h1>Not found</h1>}</Route>
    </Switch>
  </Router>
);
