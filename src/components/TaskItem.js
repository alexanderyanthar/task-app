import React from 'react'

const TaskItem = ({ task, handleCheckBox }) => {
  const { id, title, date, time } = task;
  return (
    <li key={task.id}>
        <input type="checkbox" onChange={(() => {handleCheckBox(id)})}/>
        <div>
          <h3>{title}</h3>
          <p>Date: {date}</p>
          <p>Due Time: {time}</p>
        </div>
    </li>
  )
}

export default TaskItem