import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
/*   const handleSearch = () => {
    debounce(onSearch, 500);
  } */

  return (
    <div id="breeds-search-component">
      <input type="text" placeholder="Search breed..." onChange={onSearch}></input>
      <button>Go</button>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  onSearch: () => {},
};

export default Search;
