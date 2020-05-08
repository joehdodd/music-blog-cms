import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Post from './Post';
import Login from './Login';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact private={Post} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
