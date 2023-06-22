import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [error, setError] = useState('');
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  const [dateInput, setDateInput] = useState(formattedDate);
  const [timeInput, setTimeInput] = useState('');

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
      time: timeInput
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
    setError('');
    setDateInput(formattedDate);
    setTimeInput('');
  };

  const handleInputChange = (e) => {
    if (e.target.type === 'text') {
      setTaskInput(e.target.value);
    } else if (e.target.type === 'date') {
      const selectedDate = new Date(e.target.value);
      if (selectedDate < currentDate) {
        setError('Please select a future date');
        setDateInput(formattedDate);
      } else {
        const formattedSelectedDate = selectedDate.toLocaleDateString('en-US', options);
        setDateInput(formattedSelectedDate);
        setError('');
      }
    } else if (e.target.type === 'time') {
      setTimeInput(e.target.value); // Store the time as a string
    }
  };

  const handleCheckBox = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== taskId;
      });
    });
  };

  return (
    <div className='App'>
      <TaskForm
        handleSubmit={handleSubmit}
        taskInput={taskInput}
        dateInput={dateInput}
        timeInput={timeInput}
        handleInputChange={handleInputChange}
        error={error}
      />
      {error && <p className='error'>{error}</p>}
      <ul>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} handleCheckBox={handleCheckBox} />;
        })}
      </ul>
    </div>
  );
};

export default App;
