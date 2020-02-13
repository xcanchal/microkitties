import React, { Fragment, useState, useEffect } from 'react';

import { GET } from './api';
import Search from './components/search';
import List from './components/list';
import ListItem from './components/list-item';

const Breeds = () => {
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);

  const getBreeds = async () => {
    setLoading(true);
    const breeds = await GET('breeds');
    setBreeds(breeds);
    setLoading(false);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div id="breeds-microfrontend">
      {/* <h1>Search</h1>
      <Search /> */}
      {!!breeds.length && (
        <Fragment>
          <p>{breeds.length} breeds</p>
          <List>
            {breeds.map((breed) => (
              <ListItem breed={breed}>
                <pre>{JSON.stringify(breed)}</pre>
              </ListItem>
            ))}
          </List>
        </Fragment>
      )}
    </div>
  )
}

export default Breeds;
