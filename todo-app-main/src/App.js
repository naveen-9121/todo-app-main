// import React, { useState, useEffect } from 'react';
// import TaskInput from './components/TaskInput/index';
// import TaskList from './components/TaskList/index';
// import './App.css';

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   const onSaveBtnClick = () => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   };

//   const addTask = (task) => {
//     setTasks([...tasks, { text: task, completed: false }]);
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to localStorage
//   };

//   const toggleTaskCompletion = (index) => {
//     const updatedTasks = tasks.map((task, i) => 
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className='app-container'>
//       <div className='container'>
//         <h1 className='main-heading'>Todos</h1>
//         <h1 className="create-task-heading">
//           Create <span className="create-task-heading-subpart">Task</span>
//         </h1>
//         <TaskInput addTask={addTask} />
//         <TaskList 
//           tasks={tasks} 
//           deleteTask={deleteTask} 
//           toggleTaskCompletion={toggleTaskCompletion} 
//         />
//         <button type="button" className='save-button' onClick={onSaveBtnClick}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput/index';
import TaskList from './components/TaskList/index';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const onSaveBtnClick = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1, // Example: use a unique identifier
      text: taskText,
      completed: false,
      isEditing: true // Set editing state to true when adding
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='app-container'>
      <div className='container'>
        <h1 className='main-heading'>Todos</h1>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
        <button type="button" className='save-button' onClick={onSaveBtnClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
