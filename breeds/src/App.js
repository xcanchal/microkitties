import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './Routes';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <div id="breeds-app">
    <Router history={history}>
      <Routes />
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
