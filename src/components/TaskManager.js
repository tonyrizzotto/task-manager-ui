import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';
import CreateTask from './CreateTask';

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
    <div id="task-manager">
      <div className="heading">
        <h1>Welcome, {user.name}</h1>
      </div>
      <div className="new-tasks">
        <CreateTask setTasks={setTasks} />
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div className="task" key={task._id}>
            {task.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
