import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Error from '../../components/error';
import axios from 'axios';
import './user.css';

const User = ({ match, history }) => {
  const [user, userUpdate] = useState({});
  const [errorData, setError] = useState('');

  function handleUserUpdate(data) {
    userUpdate(data);
  }

  useEffect(async () => {
    if (history.location.state) {
      handleUserUpdate(history.location.state);
    } else {
      try {
        let { data } = await axios.get(
          `https://jsonplaceholdere.typicode.com/users/${match.params.id}`
        );
        handleUserUpdate(data);
      } catch (error) {
        setError(error.message);
      }
    }
  }, []);

  return (
    <>
      {errorData && <Error error={errorData} />}
      {!errorData && (
        <div className="ui two column stackable grid container">
          <div className="left column">
            {user.name ? (
              <div>
                <h3>{user.name}</h3>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="sidebar one column">
            <div>
              <Link className="ui button" to={`/posts/${match.params.id}`}>
                {user.name} Posts
              </Link>
            </div>
            <div>
              <Link className="ui button" to={`/albums/${match.params.id}`}>
                {user.name} Albums
              </Link>
            </div>
            <Link className="ui button" to={'/users'}>
              Back to users list
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(User);
