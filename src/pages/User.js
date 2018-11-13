import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const User = ({ match, history }) => {
  const [user, userUpdate] = useState({});

  function handleUserUpdate(data) {
    userUpdate(data);
  }

  useEffect(async () => {
    if (history.location.state) {
      handleUserUpdate(history.location.state);
    } else {
      let { data, status } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
      );
      if (status === 200) {
        handleUserUpdate(data);
      }
    }
  }, []);

  return (
    <div>
      {user.name ? (
        <div>
          <h3>{user.name}</h3>
          <div>
            <Link to={`/posts/${match.params.id}`}>{user.name} Posts</Link>
          </div>
          <div>
            <Link to={`/albums/${match.params.id}`}>{user.name} Albums</Link>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to={'/users'}>Back to users list</Link>
    </div>
  );
};

export default withRouter(User);
