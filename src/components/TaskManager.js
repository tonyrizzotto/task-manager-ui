import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';

const TaskManager = () => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      taskClient.getUser().then((res) => setUser(res));
      taskClient.getTasks().then((res) => setTasks(res));
    },
    [],
    [tasks]
  );
  return (
    <div>
      <div>
        <h1>Welcome, {user.name}</h1>
      </div>
      {tasks.map((task) => (
        <div key={task._id}>{task.description}</div>
      ))}
    </div>
  );
};

export default TaskManager;
