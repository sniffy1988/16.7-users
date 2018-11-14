import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Users, User, Posts, Albums, Photos } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/users'} component={Users} />
          <Route path={'/users/:id'} component={User} />
          <Route path={'/posts/:id'} component={Posts} />
          <Route exact path={'/albums/:id'} component={Albums} />
          <Route path={'/albums/:id/photos'} component={Photos} />
        </Switch>
      </Router>
    );
  }
}

export default App;
