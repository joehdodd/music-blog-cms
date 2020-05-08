import React from 'react';
import Post from './Post';

import './Post.css';

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-wrapper">
        <Post />
      </div>
    );
  }
}

export default PostContainer;
