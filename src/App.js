import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Users, User} from './pages';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users/:id'} component={User}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
