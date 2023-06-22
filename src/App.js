import React, { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.trim() === '') {
      setError('Please enter a task');
      return;
    }

    if (tasks.some((task) => task.title === taskInput)) {
      setError('Task already exists!');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskInput
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
    setError('');
  }
  
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    setError('');
  }

  const handleCheckBox = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task => {
        return task.id !== taskId}))
      }) 
  }



  return (
    <div className='App'>
      <TaskForm handleSubmit={handleSubmit} taskInput={taskInput} handleInputChange={handleInputChange} error={error} />
      {error && <p className='error'>{error}</p>}
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem key={task.id} task={task} handleCheckBox={handleCheckBox} />
          )
        })}
      </ul>
    </div>
  )
}

export default App