import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ className }) => (
  <div id="component-home" className={`${className}`}>
    <ul>
    <li><Link to="/cats">Cats</Link></li>
    <li><Link to="/cats">Dogs</Link></li>
    </ul>
  </div>
);

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

Home.defaultProps = {};

export default Home;
