import React, { useState } from 'react';
import authProvider from '../middleware/middleware';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    authProvider.login({ email, password }).then((data) => {
      // set Authentication on result of login request
      props.setIsAuthenticated(authProvider.isAuthenticated());
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
