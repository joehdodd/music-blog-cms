const checkAuth = () => {
  const date = new Date();
  return !!localStorage.getItem('session')
    ? JSON.parse(localStorage.getItem('session')) > date.getTime()
    : false;
};

export default (
  state = {
    inputValues: {
      username: '',
      password: '',
    },
    isAuthenticated: checkAuth(),
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
    default:
      return state;
  }
};
