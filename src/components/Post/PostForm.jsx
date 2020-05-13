import React from 'react';

export default ({ onChange, inputValues }) => {
  return (
    <div>
      <form onSubmit={(e) => console.log(e)}>
        <input
          type="text"
          name="postTitle"
          value={inputValues.postTitle}
          placeholder="Title"
          onChange={onChange}
        />
        <textarea
          name="postBody"
          value={inputValues.postBody}
          placeholder="Body"
          onChange={onChange}
        />
      </form>
    </div>
  );
};
