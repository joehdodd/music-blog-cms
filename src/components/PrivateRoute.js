import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  checkAuth = () => {
    const { isAuthenticated, history, location } = this.props;
    if (!isAuthenticated) {
      history.push('/login', { from: location });
    }
  };
  componentDidMount() {
    this.checkAuth();
  }
  componentDidUpdate() {
    this.checkAuth();
  }
  render() {
    const { isAuthenticated, children, history, location } = this.props;
    return isAuthenticated
      ? children
      : history.push('/login', { from: location });
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
