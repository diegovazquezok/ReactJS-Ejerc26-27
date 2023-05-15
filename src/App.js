import { useState, useReducer } from 'react';
import TaskListContext from '../src/context/TaskContext';
import taskReducer, { ADD_TASK, REMOVE_TASK, FILTER_TASKS } from '../src/context/TaskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  const [task, setTask] = useState('');
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  };

  const filterTasks = (filterText) => {
    const filteredTasks = state.tasks.filter((task) =>
      task.title.toLowerCase().includes(filterText.toLowerCase())
    );
    dispatch({
      type: FILTER_TASKS,
      payload: filteredTasks,
    });
  };

  return (
    <div className="App">
      <TaskListContext.Provider
        value={{ tasks: state.tasks, addTask: addTask, removeTask: removeTask, filterTasks: filterTasks }}
      >
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </TaskListContext.Provider>
    </div>
  );
}

export default App;