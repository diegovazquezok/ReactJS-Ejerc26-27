import { useState, useContext } from 'react';
import TaskListContext from '../components/TaskList';

function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTask({ id: Date.now(), title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nueva tarea" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;