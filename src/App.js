import React, { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [error, setError] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];
  const [dateInput, setDateInput] = useState(currentDate);

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
      title: taskInput,
      date: dateInput,
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
    setError('');
    setDateInput(currentDate);
  }
  
  const handleInputChange = (e) => {
  if (e.target.type === 'text') {
    setTaskInput(e.target.value);
  } else if (e.target.type === 'date') {
    setDateInput(e.target.value);
  }
  setError('');
};


  const handleCheckBox = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task => {
        return task.id !== taskId}))
      }) 
  }

  



  return (
    <div className='App'>
      <TaskForm handleSubmit={handleSubmit} taskInput={taskInput} dateInput={dateInput} handleInputChange={handleInputChange} error={error} currentDate={currentDate} />
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