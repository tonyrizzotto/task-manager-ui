import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';
import CreateTask from './CreateTask';
import './styles/TaskManager.css';

const TaskManager = () => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskClient.getUser().then((res) => setUser(res));
  }, []);

  useEffect(
    () => {
      taskClient.getTasks().then((res) => setTasks(res));
    },
    [],
    [tasks]
  );

  // helper to change the display on selection
  const applyStyles = (target, style) => {
    if (target.classList.contains(style)) {
      target.classList.remove(style);
    } else {
      target.classList.add(style);
    }

    let icon = target.nextElementSibling;

    if (icon.classList.contains('red-check')) {
      icon.classList.remove('red-check');
    } else {
      icon.classList.add('red-check');
    }
  };
  return (
    <div id="task-manager">
      <div className="heading">
        <h1>Welcome, {user.name}</h1>
      </div>
      <div className="new-tasks">
        <CreateTask setTasks={setTasks} />
      </div>
      <div id="tasks">
        {tasks.map((task) => (
          <div className="task" key={task._id}>
            <span>
              <p
                className="desc"
                data-id={task._id}
                onClick={(e) => {
                  const item = e.target;
                  applyStyles(item, 'selected');
                }}
              >
                {task.description}
              </p>
              <i
                className="fas fa-times"
                onClick={(e) => {
                  const item =
                    e.target.previousElementSibling.attributes[1].value;
                  e.target.classList.add('hidden');
                  taskClient.deleteTask(item, setTasks);
                }}
              ></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
