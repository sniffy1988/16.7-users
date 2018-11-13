import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Albums({ match, history }) {
  const [albumsdata, updateAlbums] = useState([]);
  function handleAlbumClick(album) {
    history.push(`/albums/${album.id}/photos`, album);
  }
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${match.params.id}`
      );
      updateAlbums(data);
    } catch {}
  }, []);
  return (
    <ul>
      {albumsdata.map(album => (
        <li
          key={album.id}
          onClick={() => {
            handleAlbumClick(album);
          }}
        >
          {album.title}
        </li>
      ))}
    </ul>
  );
}
