import React, { useState } from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/TimePicker/TimePicker.css";

const TimePicker = ({ onTimeSet }) => {
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleTimeSet = () => {
    const time = `${day} ${hours}:${minutes}`;
    onTimeSet(time);
    setDay("");
    setHours("");
    setMinutes("");
  };

  return (
    <div className="time-picker">
      <label htmlFor="timePicker">Needed time to finish the task</label>
      <input
        type="number"
        value={day}
        onChange={handleDayChange}
        className="day-input"
        placeholder="Day"
      />
      <input
        type="number"
        min="0"
        max="23"
        value={hours}
        onChange={handleHoursChange}
        className="hours-input"
        placeholder="Hours"
      />
      <span className="separator">:</span>
      <input
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={handleMinutesChange}
        className="minutes-input"
        placeholder="Minutes"
      />
    </div>
  );
};

export default TimePicker;
