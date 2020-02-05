import React from 'react';
import Header from '../components/header';

import GlobalStyles from './global-styles';

const App = () => (
  <>
  <GlobalStyles />
  <div id="app">
    <Header />
    <h2>Microfrontends container</h2>
  </div>
  </>
);

export default App;
