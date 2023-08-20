import React, { useState } from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/TaskReminder/TaskReminder.css";

const TaskReminder = ({ onReminderAdd }) => {
  const [reminder, setReminder] = useState("");
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAddReminder = () => {
    if (time.trim() !== "") {
      const reminderItem = {
        reminder,
        time,
      };
      onReminderAdd(reminderItem);
      setReminder("");
      setTime("");
    }
  };

  return (
    <div className="taskReminder">
      <label htmlFor="taskPriority">Add task reminder:</label>

      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        className="time-input"
      />
    </div>
  );
};

export default TaskReminder;
