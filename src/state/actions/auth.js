export const onChange = (name, value) => {
  return {
    type: 'LOGIN_INPUT_CHANGE',
    name,
    value,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    console.log(username, password);
  };
};
