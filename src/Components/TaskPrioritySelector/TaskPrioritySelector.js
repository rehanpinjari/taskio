import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/TaskPrioritySelector/TaskPrioritySelector.css";

const TaskPrioritySelector = () => {
  return (
    <div className='addTaskLevel'>
      <div className='taskLevel'>
      <label htmlFor="taskPriority">Add task priority level:</label>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue>Set priority level</option>
        <option value="1">
          <BsCircleFill /> To Do
        </option>
        <option value="2">
          <BsCircleFill /> In Progress
        </option>
        <option value="3">
          <BsCircleFill /> Completed
        </option>
      </select>
      </div>
    </div>
  );
};

export default TaskPrioritySelector;
