import API from '../../API';

export const onChange = (name, value) => {
  return {
    type: 'POST_INPUT_CHANGE',
    name,
    value,
  };
};
