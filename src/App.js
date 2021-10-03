import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import './App.css';
import authProvider from './middleware/middleware';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // when page is loaded, verify if a cookie is stored, and is valid. Otherwise, it will return false and user is directed to login.
    setIsAuthenticated(authProvider.isAuthenticated());
  }, []);
  return (
    <div id="wrapper">
      <div className="container">
        {!isAuthenticated ? (
          <Login setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <TaskManager />
        )}
      </div>
    </div>
  );
};

export default App;
