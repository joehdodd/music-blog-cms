import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Post from './Post';
import Authorize from './Authorize';
import Login from './Login';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact private={Post} />
        <PrivateRoute path="/authorize" private={Authorize} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
