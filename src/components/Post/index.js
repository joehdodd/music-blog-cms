import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onChange } from '../../state/actions/posts';
import Post from './Post';
import SearchContainer from '../Search';
import PostForm from './PostForm';

import './Post.css';

const SpotifyItemData = ({ item }) => {
  return (
    <div className="post-data">
      <div className="post-data-header">
        <img src={item.album.images[1].url} alt={item.name} />
        <div>
          <h2>{item.name}</h2>
          <h3>{item.album.name}</h3>
          {item.artists.map((artist, i) => (
            <span key={i}>{artist.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

class PostContainer extends React.Component {
  componentDidMount() {
    const { spotifyAuthorized, history } = this.props;
    if (!spotifyAuthorized) {
      history.push('/authorize');
    }
  }
  handleChange = (e) => {
    this.props.onChange(e.target.name, e.target.value);
  };
  handlePost = () => {
    const { selectedItem, inputValues } = this.props;
    const post = {
      name: selectedItem.name,
      spotifyId: selectedItem.id,
      ...inputValues
    };
    console.log(post)
  }
  render() {
    const { selectedItem, inputValues } = this.props;
    const postHasValues =
      !!inputValues.postTitle &&
      !!inputValues.postBody &&
      selectedItem !== null;
    return (
      <div className="post-wrapper">
        <div className="container">
          <Post>
            <SearchContainer />
            <div className="post-data-container">
              <PostForm
                inputValues={inputValues}
                onChange={this.handleChange}
              />
              {selectedItem && <SpotifyItemData item={selectedItem} />}
            </div>
            <button disabled={!postHasValues} onClick={this.handlePost}>Post</button>
          </Post>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts, spotify } = state;
  return {
    spotifyAuthorized: auth.spotifyAuthorized,
    selectedItem: spotify.selectedItem,
    inputValues: posts.inputValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(onChange(name, value));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostContainer)
);
