export default (
  state = {
    inputValues: {
      username: '',
      password: '',
    },
    isAuthenticated: !!localStorage.getItem('user'),
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
