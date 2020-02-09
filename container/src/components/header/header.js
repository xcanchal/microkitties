import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from '../header-nav';

const Header = ({ className }) => (
  <div id="component-header" className={`${className}`}>
    <p id="header-logo"> Microfrontends</p>
    <HeaderNav />
  </div>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
Header.defaultProps = {};

export default Header;
