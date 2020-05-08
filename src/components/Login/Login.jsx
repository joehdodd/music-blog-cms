import React from 'react';

export default ({ username, password, onChange }) => (
  <div className="login-container">
    <div className="login-card">
      <h1>
        <span role="img" aria-label="Headphones Emoji">
          🎧
        </span>
      </h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </form>
    </div>
  </div>
);
