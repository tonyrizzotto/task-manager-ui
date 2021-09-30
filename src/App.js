import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <div>
      <div className="container">
        {isAuthenticated ? (
          <TaskManager />
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </div>
  );
};

export default App;
