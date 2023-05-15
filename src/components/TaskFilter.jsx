import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskFilter = () => {
  const { filterTasks } = useContext(TaskContext);

  const handleChange = (event) => {
    const filter = event.target.value;
    filterTasks(filter);
  };

  return (
    <div>
      <input type="text" placeholder="Filter tasks..." onChange={handleChange} />
    </div>
  );
};

export default TaskFilter;
