import API from '../../API';

export const onChange = (name, value) => {
  return {
    type: 'LOGIN_INPUT_CHANGE',
    name,
    value,
  };
};

const setAuth = (auth) => {
  return {
    type: 'SET_AUTH',
    auth,
  };
};

const setSpotifyAuth = (auth) => {
  return {
    type: 'SET_SPOTIFY_AUTH',
    auth,
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    try {
      const { username, password } = getState().auth.inputValues;
      const {
        data: { session, spotifySession },
      } = await API('/session', {
        method: 'POST',
        data: { username, password },
      });
      localStorage.setItem('session', session);
      localStorage.setItem('spotifySession', spotifySession);
      dispatch(setAuth(true));
      dispatch(setSpotifyAuth(spotifySession));
    } catch (e) {
      console.log(e);
    }
  };
};

export const spotifyAuthorize = () => {
  return async (dispatch) => {
    try {
      const {
        data: { redirect },
      } = await API('/spotify/authorize', {
        method: 'GET',
      });
      return window.open(redirect, '_self');
    } catch (e) {
      console.log('ERROR!!!!', e);
    }
  };
};

export const spotifyToken = (code) => {
  return async (dispatch) => {
    try {
      const {
        data: { spotifySession },
      } = await API(`/spotify/token/${code}`, {
        method: 'GET',
      });
      localStorage.setItem('spotifySession', spotifySession);
      dispatch(setSpotifyAuth(true));
    } catch (e) {
      console.log('ERROR!!!!', e);
    }
  };
};
