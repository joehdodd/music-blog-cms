const checkAuth = key => {
  const date = new Date();
  return !!localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)) > date.getTime()
    : false;
};

export default (
  state = {
    inputValues: {
      username: '',
      password: '',
    },
    isAuthenticated: checkAuth('session'),
    spotifyAuthorized: checkAuth('spotifySession'),
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
      return {
        ...state,
        isAuthenticated: action.auth,
      };
    case 'SET_SPOTIFY_AUTH':
      return {
        ...state,
        spotifyAuthorized: action.auth,
      };
    default:
      return state;
  }
};
