import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import Routes from './root/routes';

const App = ({ history }) => (
  <div id="cats-app">
    <Router history={history || {}}>
      <Routes />
    </Router>
  </div>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

App.defaultProps = {};

export default App;
