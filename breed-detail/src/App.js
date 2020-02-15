import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyles from './global-styles';
import BreedDetail from './BreedDetail';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <div id="breed-detail-app">
    <GlobalStyles />
    <Router history={history}>
      <Route exact path="/breed/:name" component={BreedDetail} />
    </Router>
  </div>
);

App.propTypes = {
  history: PropTypes.object,
};

App.defaultProps = {
  history: null,
};

App.defaultProps = {};

export default App;
