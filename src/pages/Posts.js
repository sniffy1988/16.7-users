import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts({ match }) {
  const [postsdata, updatePosts] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
      );
      updatePosts(data);
    } catch {}
  }, []);

  return (
    <ul>
      {postsdata.map(item => (
        <li key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
