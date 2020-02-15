import React, { useState, useEffect } from 'react';

import { GET } from './api';
import Search from './components/search';
import List from './components/list';
import ListItem from './components/list-item';

const Breeds = () => {
  const [search, setSearch] = useState('');
  const [breeds, setBreeds] = useState([]);

  const getBreeds = async () => {
    let breedsWithImage = localStorage.getItem('breedsWithImage');
    if (!breedsWithImage) {
      const breeds = await GET('breeds');
      breedsWithImage = await Promise.all(
        breeds.map((breed) => GET(`images/search?breed_ids=${breed.id}&size=small&limit=1`))
      );
      breedsWithImage = breedsWithImage.map(([{ breeds, url }]) => ({
        ...breeds[0],
        image: url,
      }));
      localStorage.setItem('breedsWithImage', JSON.stringify(breedsWithImage));
    } else {
      breedsWithImage = JSON.parse(breedsWithImage);
    }
    setBreeds(breedsWithImage);
  }


  const onSearch = ({ target: { value: searchText }}) => {
    setSearch(searchText);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div id="breeds-microfrontend">
      <Search onSearch={onSearch} />
      {!!breeds.length ? (
        <List>
          {breeds
            .filter(breed => breed.name.toLowerCase().includes(search))
            .map((breed) => (
              <ListItem breed={breed} key={`breed-${breed.id}`} />
            )
          )}
        </List>
      ) : <p>Loading...</p>}
    </div>
  )
}

export default Breeds;
