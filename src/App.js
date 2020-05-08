import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact isAuthenticated={false}>
          <div> 
            <h1>CMS</h1>
          </div>
        </PrivateRoute>
        <Route
          path="/login"
          component={Login}
        />
      </Switch>
    );
  }
}

export default App;
