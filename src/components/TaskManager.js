import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';

const TaskManager = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    taskClient.getUser().then((res) => setUser(res));
  }, []);

  return <div>Welcome Back, {user.name}!</div>;
};

export default TaskManager;
