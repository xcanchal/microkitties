import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children, className }) => (
  <div id="breeds-list-component" className={`${className}`}>
    {children}
  </div>
);

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

List.defaultProps = {
  children: [],
  className: ''
};

export default List;
