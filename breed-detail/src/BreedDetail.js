import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { GET } from './api';
import Detail from './components/detail';

const BreedDetail = (props) => {
  const { match = { params = {} } = {} } = props;
  const [breed, setBreed] = useState(null);

  const getBreedDetail = async () => {
    const [breedDetail] = await GET(`breeds/search?q=${match.params.name}`);
    const breedsWithImage = await GET(`images/search?breed_ids=${breedDetail.id}&size=small&limit=1`);
    breedDetail.image = breedsWithImage[0].url;
    setBreed(breedDetail);
  }

  useEffect(() => {
    getBreedDetail();
  }, []);

  return (
    <div id="breed-detail-microfrontend">
      {breed ? <Detail breed={breed} /> : <p>Loading...</p>}
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
