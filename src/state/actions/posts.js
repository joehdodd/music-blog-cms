import API from '../../API';

export const onChange = (name, value) => {
  return {
    type: 'POST_INPUT_CHANGE',
    name,
    value,
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await API('/post', {
        method: 'POST',
        data: {
          ...post,
        },
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
};
