import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function UsersList({ history }) {
  const [users, setUsers] = useState([]);

  function setUserChange(data) {
    setUsers(data);
  }

  function onUserClick(user) {
    history.push(`/users/${user.id}`, user);
  }

  useEffect(async () => {
    const { data, status } = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (status === 200) {
      setUserChange(data);
    }
  }, []);

  return (
    <div className="ui relaxed divided list">
      {users.map(item => (
        <div
          className="item"
          key={item.id}
          onClick={() => {
            onUserClick(item);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
