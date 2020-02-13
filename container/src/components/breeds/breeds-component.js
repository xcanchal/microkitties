import React from 'react';
import PropTypes from 'prop-types';

import MicroFrontend from '../micro-frontend';

const Breeds = ({ history }) => (
  <MicroFrontend name="Breeds" host="http://localhost:9000" history={history} />
);

Breeds.propTypes = {
  history: PropTypes.object.isRequired,
};
Breeds.defaultProps = {};

export default Breeds;
