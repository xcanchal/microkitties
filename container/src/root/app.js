import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header';
import Routes from './routes';

import GlobalStyles from './global-styles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <div className="layout-header">
        <Header />
      </div>
      <div className="layout-content">
        <Routes />
      </div>
    </Router>
  </Fragment>
);

export default App;
