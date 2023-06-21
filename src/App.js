import React, { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

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
      <TaskForm handleSubmit={handleSubmit} taskInput={taskInput} handleInputChange={handleInputChange} />
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