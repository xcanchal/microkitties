
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderBreedDetail = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

window.unmountBreedDetail = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};