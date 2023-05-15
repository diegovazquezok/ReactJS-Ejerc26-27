import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      {task.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;