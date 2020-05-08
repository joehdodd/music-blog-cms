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

export const login = () => {
  return async (dispatch, getState) => {
    try {
      const { username, password } = getState().auth.inputValues;
      const {
        data: { session },
      } = await API('/session', {
        method: 'POST',
        data: { username, password },
      });
      localStorage.setItem('session', session);
      dispatch(setAuth(true));
    } catch (e) {
      console.log(e);
    }
  };
};
