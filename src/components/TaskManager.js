import React, { useEffect, useState } from 'react';
import taskClient from '../middleware/taskClient';
import CreateTask from './CreateTask';
import './styles/TaskManager.css';

const TaskManager = () => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [previousTask, setPreviousTask] = useState('');
  // const [editedTask, setEditedTask] = useState('');

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
          <div className="task edit-icon" key={task._id}>
            <span>
              <i
                className="fas fa-pencil-alt"
                onClick={(e) => {
                  const pItem = e.target.nextElementSibling;

                  //store previous task in state
                  setPreviousTask(pItem.innerText);

                  //create an input with task._id attribute
                  const editInput = document.createElement('input');
                  editInput.setAttribute('type', 'text');
                  editInput.classList.add('edit-input');
                  editInput.setAttribute('placeholder', pItem.innerText);
                  editInput.setAttribute('data-id', task._id);

                  pItem.parentNode.replaceChild(editInput, pItem);
                }}
              ></i>
              <p
                className="desc"
                data-id={task._id}
                onClick={(e) => {
                  applyStyles(e.target, 'selected');
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
                  e.target.previousElementSibling.classList.add('hidden');
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
