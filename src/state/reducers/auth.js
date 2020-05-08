export default (
  state = {
    inputValues: {
      username: '',
      password: '',
    },
    isAuthenticated: false,
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
    default:
      return state;
  }
};
