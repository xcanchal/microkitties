import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderNav = ({ className }) => (
  <ul id="component-header-nav" className={`${className}`}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/cats">Cats</Link></li>
  </ul>
);

HeaderNav.propTypes = {
  className: PropTypes.string.isRequired,
};

HeaderNav.defaultProps = {};

export default HeaderNav;
