import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="ui secondary pointing menu">
    <Link to={'/users'}>Click to see Users</Link>
  </div>
);

export default Home;
