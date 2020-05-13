import React from 'react';

export default (props) => {
  return (
    <div>
      <form onSubmit={(e) => console.log(e)}>
        <input type="text" name="postTitle" placeholder="Title" />
        <textarea name="postBody" placeholder="Body" />
      </form>
    </div>
  );
};
