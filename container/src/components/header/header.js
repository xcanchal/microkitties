import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ className }) => (
  <div id="component-header" className={`${className}`}>
    <div id="header-logo"><Link to="/breeds">Microkitties</Link></div>
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
Header.defaultProps = {};

export default Header;
