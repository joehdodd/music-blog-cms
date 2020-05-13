import React from 'react';
import { connect } from 'react-redux';
import { searchSpotify, onChange } from '../../state/actions/spotify';
import Search from './Search';
import SearchResults from './SearchResults';

import './Search.css';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
    };
  }
  handleInputChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.name, e.target.value);
  };
  handleSearch = () => {
    const { searchQuery } = this.props;
    this.setState({ showList: true });
    this.props.searchSpotify(searchQuery);
  };
  handleItemClick = (item) => {
    console.log(item);
    this.setState({ showList: false });
  };
  handleBlur = () => {
    console.log('frrrprprprprprp');
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
          resultsStyle={showList}
        />
        <SearchResults
          items={items}
          showList={showList}
          handleItemClick={this.handleItemClick}
        />
        <button onClick={this.handleSearch}>Search</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
