import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts({ match, history }) {
  const [postsdata, updatePosts] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
      );
      updatePosts(data);
    } catch (error) {}
  }, []);

  function onBackClick() {
    history.goBack();
  }

  return (
    <>
      <div className="ui list divided">
        {postsdata.map(item => (
          <div key={item.id} className="item">
            <div className="wrapper">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="ui button" onClick={onBackClick}>
        Back to User
      </button>
    </>
  );
}
