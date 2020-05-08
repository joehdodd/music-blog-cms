import React from 'react';
import Login from './Login';
import './Login.css';

class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <Login />
      </div>
    );
  }
}

export default LoginContainer;
