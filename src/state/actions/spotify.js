import API from '../../API';

export const onChange = (name, value) => {
  return {
    type: 'SPOTIFY_SEARCH_INPUT_CHANGE',
    name,
    value,
  };
};

const setSearchResults = (results) => ({
  type: 'SET_SPOTIFY_SEARCH_RESULTS',
  results,
});

const setSearchError = (bool) => ({
  type: 'SET_SPOTIFY_SEARCH_ERROR',
  bool,
});

export const searchSpotify = (query) => {
  return async (dispatch) => {
    try {
      const {
        data: { results },
      } = await API('spotify/search', {
        params: { query },
      });
      dispatch(setSearchResults(results));
    } catch (e) {
      dispatch(setSearchError(true));
    }
  };
};

export const setSpotifyItem = (item) => ({
  type: 'SET_SPOTIFY_ITEM',
  item,
});
