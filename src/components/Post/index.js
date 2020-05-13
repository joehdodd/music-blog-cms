import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';
import SearchContainer from '../Search';
import PostForm from './PostForm';

import './Post.css';

class PostContainer extends React.Component {
  componentDidMount() {
    const { spotifyAuthorized, history } = this.props;
    if (!spotifyAuthorized) {
      history.push('/authorize');
    }
  }
  render() {
    return (
      <div className="post-wrapper">
        <div className="container">
          <Post>
            <SearchContainer />
            <PostForm />
          </Post>
        </div>
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
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostContainer)
);
