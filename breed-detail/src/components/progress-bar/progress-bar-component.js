import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ className }) => (
  <div className={`${className} progress-bar`}>
    <div className="progress-bar__track">
      <div className="progress-bar__fill" />
    </div>
  </div>
);

Detail.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
};

Detail.defaultProps = {
  className: '',
  total: 100,
  percent: 50
};

export default Detail;
