import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withError from '../../HOCs/withError';

export default function Photos({ location, match, history }) {
  const [photosdata, updatePhotos] = useState([]);
  const [errorData, setError] = useState('');

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${match.params.id}`
      );
      updatePhotos(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function onBackToAlbums() {
    history.goBack();
  }

  return (
    <>
      <h2>{location.state.title}</h2>
      {withError(
        <div className="ui four column stackable grid container">
          {photosdata.map(photo => (
            <div key={photo.id} className="column">
              <div className="ui card">
                <div className="image">
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
                <div className="content">
                  <div className="description">{photo.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>,
        errorData
      )}
      <button className="ui button" onClick={onBackToAlbums}>
        Back to Albums
      </button>
    </>
  );
}
