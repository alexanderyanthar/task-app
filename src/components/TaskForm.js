import React from 'react'

const TaskForm = ({ handleSubmit, taskInput, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task' value={taskInput} onChange={handleInputChange}/>
    </form>
  )
}

export default TaskForm