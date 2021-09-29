import React from 'react';
import TaskManager from './components/TaskManager';
import Login from './components/Login';
import { isAuthenticated } from './middleware/middleware';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="container">
        {isAuthenticated() ? (
          <TaskManager />
        ) : (
          <Login isAuthenticated={isAuthenticated} />
        )}
      </div>
    </div>
  );
};

export default App;
