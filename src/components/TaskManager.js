import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';
import CreateTask from './CreateTask';
import './styles/TaskManager.css';

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

  // Listen for task modifications
  const taskArray = document.querySelectorAll('.task');
  taskArray.forEach((item) => {
    item.addEventListener('click', () => {
      const content = item.querySelector('p');
      const check = item.querySelector('.fas');
      if (content.classList.contains('selected')) {
        content.classList.remove('selected');
        check.style.opacity = '0';
      } else {
        content.classList.add('selected');
        check.style.opacity = '1';
      }
    });
  });

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
            <span>
              <p className="desc" data-id={task._id}>
                {task.description}
              </p>
              <i className="fas fa-check"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
