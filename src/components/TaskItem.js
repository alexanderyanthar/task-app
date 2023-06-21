import React from 'react'

const TaskItem = ({ task, handleCheckBox }) => {
  return (
    <li key={task.id}>
        <input type="checkbox" onChange={(() => {handleCheckBox(task.id)})}/>
        {task.title}
    </li>
  )
}

export default TaskItem