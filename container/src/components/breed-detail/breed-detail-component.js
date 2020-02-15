import React from 'react';
import PropTypes from 'prop-types';

import MicroFrontend from '../micro-frontend';

const BreedDetail = ({ history }) => (
  <MicroFrontend name="BreedDetail" host="http://localhost:9000" history={history} />
);

BreedDetail.propTypes = {
  history: PropTypes.object.isRequired,
};
BreedDetail.defaultProps = {};

export default BreedDetail;
