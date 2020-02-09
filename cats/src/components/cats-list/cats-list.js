import React, { useState } from 'react';

const CatsList = () => {
  const [visibleList, setVisibleList] = useState(false);

  return (
    <div id="cats-list-component">
      <button onClick={() => setVisibleList(!visibleList)}>Show cats</button>
      {visibleList ? (
        <ul>
          <li>Cat 1</li>
          <li>Cat 2</li>
          <li>Cat 3</li>
        </ul>
      ) : null}
    </div>
  )
}

export default CatsList;
