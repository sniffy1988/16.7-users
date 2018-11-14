import React, { useState, useEffect } from 'react';
import './user.css';
import Error from '../../components/error';

import axios from 'axios';

export default function UsersList({ history }) {
  const [users, setUsers] = useState([]);
  const [errordata, setError] = useState('');

  function setUserChange(data) {
    setUsers(data);
  }

  function onUserClick(user) {
    history.push(`/users/${user.id}`, user);
  }

  useEffect(async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserChange(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <>
      {errordata && <Error error={errordata} />}
      {!errordata && (
        <div className="ui divided list users-list">
          {users.map(item => (
            <div
              className="item"
              key={item.id}
              onClick={() => {
                onUserClick(item);
              }}
            >
              <div className="wrapper">
                <h4>
                  <i className="users icon" />
                  {item.name}
                </h4>
                <div className="content">
                  <i className="mail icon" />
                  {item.email}
                </div>
                <div className="content">
                  <i className="phone icon" />
                  {item.phone}
                </div>
                <div className="content">
                  <i className="linkify icon" />
                  {item.website}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
