export default (
  state = {
    inputValues: {
      postTitle: '',
      postBody: '',
    },
  },
  action
) => {
  switch (action.type) {
    case 'POST_INPUT_CHANGE':
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
