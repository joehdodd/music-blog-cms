import React from 'react';
import { connect } from 'react-redux';
import { spotifyAuthorize, spotifyToken } from '../../state/actions/auth';
import Authorize from './Authorize';

import './Authorize.css';

class AuthorizeContainer extends React.Component {
  componentDidMount() {
    const {
      spotifyAuthorized,
      location: { search },
    } = this.props;
    if (spotifyAuthorized) {
      this.props.history.push('/');
    } else if (!spotifyAuthorized && !search) {
      this.props.spotifyAuthorize();
    } else if (!spotifyAuthorized && search) {
      const code = search.split('=')[1];
      this.props.spotifyToken(code);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.spotifyAuthorized) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div className="authorize-wrapper">
        <Authorize />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    spotifyAuthorized: auth.spotifyAuthorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    spotifyAuthorize: () => {
      dispatch(spotifyAuthorize());
    },
    spotifyToken: (code) => {
      dispatch(spotifyToken(code));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeContainer);
