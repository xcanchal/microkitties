import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreedListItem = ({ breed, className, history }) => {
  const { id, name, description, origin, image } = breed;
  return (
    <div
      id="breeds-list-item"
      className={`${className} breeds-list-item`}
      onClick={history.push(`/breed/${id}`)}
    >
      <div className="breeds-list-item__left">
        <div className="breeds-list-item__left__image" />
      </div>
      <div className="breeds-list-item__right">
        <h3>{name} <small>{origin}</small></h3>
        <p>{description.slice(0, 250)}...</p>
      </div>
    </div>
  );
}

BreedListItem.propTypes = {
  className: PropTypes.string,
  breed: PropTypes.object,
  history: PropTypes.object,
};

BreedListItem.defaultProps = {
  className: '',
  breed: {},
  history: { push: () => {} },
};

export default BreedListItem;
