import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GET } from './api';

const BreedDetail = (props) => {
  console.log('props', props);
  const { match = { params = {} } = {} } = props;
  const [breed, setBreed] = useState(null);

  const getBreedDetail = async () => {
    const breedDetail = await GET(`breeds/search?q=${match.params.id}`);
    setBreed(breedDetail);
  }

  useEffect(() => {
    getBreedDetail();
  }, []);

  return (
    <div id="breed-detail-microfrontend">
      {breed ? (
        <pre>{JSON.stringify(breed)}</pre>
      ) : <p>Loading...</p>}
    </div>
  )
}

BreedDetail.propTypes = {
  match: PropTypes.object,
};

BreedDetail.defaultProps = {
  match: {},
};

export default BreedDetail;
