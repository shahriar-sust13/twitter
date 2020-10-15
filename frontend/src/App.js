import React, { Component } from 'react';
import Login from './components/login';
import Users from './components/users';
import Welcome from './components/welcome';
import Middleware from './components/middleware';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = { 
    SERVER_URL: 'http://localhost:5000/'
  }
  render() { 
    return (
      <Router>
        <Switch>
          <Route path="/newsfeed">
            <Middleware server_url={this.state.SERVER_URL}/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    );
  }
}
 
export default App;