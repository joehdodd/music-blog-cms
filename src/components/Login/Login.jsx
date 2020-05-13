import React from 'react';

export default ({ username, password, onChange, login }) => (
  <div className="login-container">
    <div className="card">
      <h1>
        <span role="img" aria-label="Headphones Emoji">
          🎧
        </span>
      </h1>
      <form onSubmit={e => login(e)}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={username}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  </div>
);
