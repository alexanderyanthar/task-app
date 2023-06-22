import React from 'react';

const TaskForm = ({ handleSubmit, handleInputChange, taskInput, dateInput, error, currentDate }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Task" value={taskInput} onChange={handleInputChange} error={error} />
      <input type='date' name='dateInput' value={dateInput} onChange={handleInputChange} min={currentDate} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
