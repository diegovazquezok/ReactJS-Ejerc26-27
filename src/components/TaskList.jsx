import { createContext, useReducer } from 'react';
import taskReducer from '../context/TaskReducer';

const initialState = {
  tasks: []
};

const TaskListContext = createContext(initialState);

export const TaskListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = task => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const deleteTask = id => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <TaskListContext.Provider value={{ state, addTask, deleteTask }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContext;