import React from 'react';
import { connect } from 'react-redux';
import {
  searchSpotify,
  onChange,
  setSpotifyItem,
} from '../../state/actions/spotify';
import Search from './Search';
import SearchResults from './SearchResults';
import _ from 'lodash';

import './Search.css';
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery && !this.props.searchQuery) {
      this.setState({ showList: false });
    }
  }
  handleInputChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  };
  handleSearchDebounce = _.debounce(() => {
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.props.searchSpotify(searchQuery);
      this.setState({ showList: true });
    }
  }, 250);
  handleItemClick = (item) => {
    this.setState({ showList: false });
    this.props.setSpotifyItem(item)
  };
  handleClickOutside = () => {
    this.setState({ showList: false });
  };
  render() {
    const {
      searchQuery,
      searchResults: {
        tracks: { items },
      },
    } = this.props;
    const { showList } = this.state;
    return (
      <div className="search-container">
        <Search
          searchQuery={searchQuery}
          onChange={this.handleInputChange}
          handleSearch={this.handleSearchDebounce}
          resultsStyle={showList}
        />
        <SearchResults
          items={items}
          showList={showList}
          handleItemClick={this.handleItemClick}
          handleClickOutside={this.handleClickOutside}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { spotify } = state;
  return {
    searchQuery: spotify.searchQuery,
    searchResults: spotify.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(onChange(name, value));
    },
    searchSpotify: (query) => {
      dispatch(searchSpotify(query));
    },
    setSpotifyItem: (item) => {
      dispatch(setSpotifyItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
