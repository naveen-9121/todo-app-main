// import React from 'react';
// import TaskItem from '../TaskItem/index';

// const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <TaskItem 
//           key={index} 
//           task={task} 
//           deleteTask={() => deleteTask(index)} 
//           toggleTaskCompletion={() => toggleTaskCompletion(index)} 
//         />
//       ))}
//     </ul>
//   );
// };

// export default TaskList;


import React from 'react';
import TaskItem from '../TaskItem/index';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          editTask={(newText) => editTask(index, newText)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

