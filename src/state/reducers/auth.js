const checkAuth = (key) => {
  const date = new Date();
  return !!localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)) > date.getTime()
    : false;
};

const checkSpotifyAuth = (key) => {
  return !!localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : false;
};

export default (
  state = {
    inputValues: {
      username: '',
      password: '',
    },
    isAuthenticated: !!checkAuth('session'),
    spotifyAuthorized: !!checkSpotifyAuth('spotifySession') || null,
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_INPUT_CHANGE':
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.name]: action.value,
        },
      };
    case 'SET_AUTH':
      console.log('SET AUTH', action);
      return {
        ...state,
        isAuthenticated: action.auth,
      };
    case 'SET_SPOTIFY_AUTH':
      console.log('SET SPOTIFY AUTH', action);
      return {
        ...state,
        spotifyAuthorized: action.auth,
      };
    default:
      return state;
  }
};
