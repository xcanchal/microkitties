import React from 'react';
import PropTypes from 'prop-types';

const BreedListItem = ({ children, className }) => (
  <div id="breeds-list-item-component" className={`${className}`}>
    {children}
  </div>
);

BreedListItem.propTypes = {
  className: PropTypes.string,
};

BreedListItem.defaultProps = {
  className: ''
};

export default BreedListItem;
