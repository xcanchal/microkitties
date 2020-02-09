import React from 'react';
import PropTypes from 'prop-types';

import MicroFrontend from '../micro-frontend';

const Cats = ({ history }) => (
  <MicroFrontend name="Cats" host="http://localhost:9000" history={history} />
);

Cats.propTypes = {
  history: PropTypes.object.isRequired,
};
Cats.defaultProps = {};

export default Cats;
