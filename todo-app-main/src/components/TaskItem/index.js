// import React from 'react';
// import './TaskItem.css';

// const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
//   return (
//     <li className='task-item'>
//       <input 
//         type='checkbox' 
//         checked={task.completed} 
//         onChange={toggleTaskCompletion} 
//         className='task-checkbox'
//       />
//       <span className={task.completed ? 'task-text completed' : 'task-text'}>
//         {task.text}
//       </span>
//       <button onClick={deleteTask} className='delete-button'>Delete</button>
//     </li>
//   );
// };

// export default TaskItem;

import React, { useState } from 'react';
import './index.css';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedTask); // Pass task.id for unique identification
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask(task.text);
  };

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };
  if (!task) return null;

  return (
    <li className='task-item'>
      {!isEditing ? (
        <>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={toggleTaskCompletion}
            className='task-checkbox'
          />
          <span className={task.completed ? 'task-text completed' : 'task-text'}>
            {task.text}
          </span>
          <button onClick={deleteTask} className='delete-button'>Delete</button>
          <button onClick={handleEdit} className='edit-button'>Edit</button>
        </>
      ) : (
        <>
          <input
            type='text'
            value={editedTask}
            onChange={handleInputChange}
            className='task-edit-input'
          />
          <button onClick={handleSave} className='save-button'>Save</button>
          <button onClick={handleCancel} className='cancel-button'>Cancel</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;




