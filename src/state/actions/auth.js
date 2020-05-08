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
        data: { user },
      } = await API('/session', {
        method: 'POST',
        data: { username, password },
      });
      localStorage.setItem('user', user.id);
      dispatch(setAuth(true));
    } catch (e) {
      console.log(e);
    }
  };
};
