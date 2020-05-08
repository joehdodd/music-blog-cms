import React from 'react';
import { connect } from 'react-redux';
import { login, onChange } from '../../state/actions/auth';
import Login from './Login';
import './Login.css';

class LoginContainer extends React.Component {
  handleInputChange = e => {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  };
  render() {
    const { username, password } = this.props;
    return (
      <div className="login-wrapper">
        <Login
          username={username}
          password={password}
          onChange={this.handleInputChange}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (username, password) => {
      dispatch(login(username, password));
    },
    onChange: (name, value) => {
      dispatch(onChange(name, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
