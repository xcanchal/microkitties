import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'debounce';

const Search = ({ className, onSearch }) => (
  <div id="breeds-search-component" className={`${className}`}>
    <input type="text" placeholder="Search breed..." onChange={onSearch}></input>
  </div>
);

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  className: '',
  onSearch: () => {},
};

export default Search;
