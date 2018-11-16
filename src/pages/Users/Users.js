import React, { useState, useEffect } from 'react';
import './user.css';
import withError from '../../HOCs/withError';

import axios from 'axios';

export default function UsersList({ history }) {
  const [errordata, setError] = useState('');
  const [users, setUsers] = useState([]);

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
      {withError(
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
        </div>,
        errordata
      )}
    </>
  );
}
