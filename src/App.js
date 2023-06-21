import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: taskInput
    };

    setTasks([...tasks, newTask]);

    setTaskInput('');
  }
  
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  }

  const handleCheckBox = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task => {
        return task.id !== taskId}))
      }) 
  }



  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task' value={taskInput} onChange={handleInputChange}/>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" onChange={(() => {handleCheckBox(task.id)})}/>
              {task.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App