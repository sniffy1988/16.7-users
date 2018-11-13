import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Photos({ location, match, history }) {
  const [photosdata, updatePhotos] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${match.params.id}`
      );
      updatePhotos(data);
    } catch (error) {}
  });
  return (
    <div>
      <h2>{location.state.title}</h2>
      <ul>
        {photosdata.map(photo => (
          <li key={photo.id}>
            <h4>{photo.title}</h4>
            <p>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
