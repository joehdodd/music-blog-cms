import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  checkAuth = () => {
    const { isAuthenticated } = this.props;
    return isAuthenticated;
  };
  render() {
    const { private: Private }= this.props;
    return (
      <Route
        {...this.props}
        render={(props) =>
          this.checkAuth() ? (
            <Private {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
