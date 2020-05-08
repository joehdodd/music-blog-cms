import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

const CMS = (props) => (
  <div>
    <h1>CMS</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact>
          <CMS />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
