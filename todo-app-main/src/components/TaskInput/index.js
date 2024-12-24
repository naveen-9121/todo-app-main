import React, { useState } from 'react';
import './index.css';


const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
        placeholder="Add a new task"
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TaskInput;
