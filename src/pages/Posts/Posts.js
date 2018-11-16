import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withError from '../../HOCs/withError';

export default function Posts({ match, history }) {
  const [postsdata, updatePosts] = useState([]);
  const [errorData, setError] = useState('');

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
      );
      updatePosts(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  function onBackClick() {
    history.goBack();
  }

  return (
    <>
      {withError(
        <div className="ui list divided">
          {postsdata.map(item => (
            <div key={item.id} className="item">
              <div className="wrapper">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>,
        errorData
      )}
      <button className="ui button" onClick={onBackClick}>
        Back to User
      </button>
    </>
  );
}
