import React from 'react'

const TaskForm = ({ handleSubmit, taskInput, handleInputChange, error }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task' value={taskInput} onChange={handleInputChange} error={error}/>
    </form>
  )
}

export default TaskForm