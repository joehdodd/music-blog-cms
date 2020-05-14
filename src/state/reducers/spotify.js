// const mockResults = require('./mockResults.json');
const mockItem = require('./mockItem.json');

export default (
  state = {
    searchQuery: '',
    searchResults: {
      tracks: {
        // items: mockResults,
        items: [],
      },
    },
    searchError: false,
    selectedItem: mockItem,
    // selectedItem: null,
  },
  action
) => {
  switch (action.type) {
    case 'SET_SPOTIFY_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: { ...action.results },
      };
    case 'SET_SPOTIFY_SEARCH_ERROR':
      return {
        ...state,
        searchError: action.bool,
      };
    case 'SPOTIFY_SEARCH_INPUT_CHANGE':
      return {
        ...state,
        searchQuery: action.value,
      };
    case 'SET_SPOTIFY_ITEM':
      return {
        ...state,
        selectedItem: action.item,
      };
    default:
      return state;
  }
};
