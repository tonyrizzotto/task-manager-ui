import React, { useState } from 'react';
import taskClient from '../middleware/taskClient';
import './styles/CreateTask.css';

const CreateTask = (props) => {
  const [input, setInput] = useState('');

  const showTaskInput = () => {
    const inputDiv = document.getElementById('task-input');
    if (inputDiv.style.display === 'none') {
      inputDiv.style.display = 'block';
    } else {
      inputDiv.style.display = 'none';
    }
  };
  return (
    <div id="task-input-display">
      <button id="show-task-input" onClick={showTaskInput}>
        Create Task
      </button>
      <div id="task-input" style={{ display: 'none' }}>
        <input
          type="text"
          placeholder="Insert a task"
          name="task-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          htmlFor="task-input"
          onClick={(e) => {
            e.preventDefault();
            taskClient.newTask(input, props.setTasks);
            setInput('');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
