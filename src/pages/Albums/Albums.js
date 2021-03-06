import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from '../../components/error';

export default function Albums({ match, history }) {
  const [albumsdata, updateAlbums] = useState([]);
  const [errorData, setError] = useState('');

  function handleAlbumClick(album) {
    history.push(`/albums/${album.id}/photos`, album);
  }

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${match.params.id}`
      );
      updateAlbums(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function backToUsersHandler() {
    history.goBack();
  }

  return (
    <>
      {errorData && <Error error={errorData} />}
      {!errorData && (
        <div className="ui divided list users-list">
          {albumsdata.map(album => (
            <div
              className="item"
              key={album.id}
              onClick={() => {
                handleAlbumClick(album);
              }}
            >
              <div className="wrapper">
                <h4>{album.title}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="ui button" onClick={backToUsersHandler}>
        Back to Users
      </button>
    </>
  );
}
