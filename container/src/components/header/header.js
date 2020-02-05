import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ className }) => (
  <div id="component-header" className={`${className}`}>
    <p>Header</p>
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
Header.defaultProps = {};

export default Header;
