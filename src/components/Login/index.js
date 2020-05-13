import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, onChange } from '../../state/actions/auth';
import Login from './Login';
import './Login.css';

class LoginContainer extends React.Component {
  checkAuth = () => {
    const {
      isAuthenticated,
      spotifyAuthorized,
      location,
      history,
    } = this.props;
    const from = location.state || { pathname: '/' };
    if (isAuthenticated && spotifyAuthorized !== null) {
      history.push(from.pathname);
    }
  };
  componentDidMount() {
    this.checkAuth();
  }
  componentDidUpdate() {
    this.checkAuth();
  }
  handleInputChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { handleLogin } = this.props;
    handleLogin();
  };
  render() {
    const { username, password } = this.props;
    return (
      <div className="login-wrapper">
        <Login
          username={username}
          password={password}
          onChange={this.handleInputChange}
          login={this.handleLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    username: auth.inputValues.username,
    password: auth.inputValues.password,
    isAuthenticated: auth.isAuthenticated,
    spotifyAuthorized: auth.spotifyAuthorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => {
      dispatch(login());
    },
    onChange: (name, value) => {
      dispatch(onChange(name, value));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
);
