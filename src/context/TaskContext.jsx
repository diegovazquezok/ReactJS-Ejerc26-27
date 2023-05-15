import { createContext } from 'react';

const TaskListContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  filterTasks: () => {},
});

export default TaskListContext;