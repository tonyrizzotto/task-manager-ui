import React, { useEffect, useState } from 'react';
import { login, checkAuthentication } from './middleware/middleware';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  login({ email: 'tony@tonyrizzotto.co', password: 'Guitar_05' });

  // useEffect(() => {
  //   const authCheck = checkAuthentication();
  //   setIsAuthenticated(authCheck);
  // }, []);
  return <div>App</div>;
};

export default App;
