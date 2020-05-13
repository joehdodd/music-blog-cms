// const mockResults = require('./mockResults.json');

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
    default:
      return state;
  }
};
