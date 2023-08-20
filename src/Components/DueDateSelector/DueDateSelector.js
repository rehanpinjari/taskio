import React, { useState } from 'react';
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/DueDateSelector/DueDateSelector.css";

const DueDateSelector = ({ onDueDateSet }) => {
  const [dueDate, setDueDate] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDueDate(selectedDate);
  };

  return (
    <div className="dueDateSelector">
    <label className='addDate' htmlFor="dueDate">Add deadline:</label>
    <input className='inputDate' type="date" id="dueDate" value={dueDate} onChange={handleDateChange} />
  </div>
  );
};

export default DueDateSelector;