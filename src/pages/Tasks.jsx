/* eslint-disable */
import { useState, useEffect } from 'react';

import socket from '../utils/socket';

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    socket.on('task:create', (task) => {
      setTasks([...tasks, task]);
    });

    return () => {
      socket.off('task:create');
    }
  }, [])

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('task', task)
    // socket.emit('task:create', task);
  }


  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange}/>
        <button type="submit">Create</button>
      </form>

    </div>
  );
}

export default TaskPage;
