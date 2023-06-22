import React from 'react'

const TaskItem = ({ task, handleCheckBox }) => {
  return (
    <li key={task.id}>
        <input type="checkbox" onChange={(() => {handleCheckBox(task.id)})}/>
        {task.title}
        {task.date}

    </li>
  )
}

export default TaskItem