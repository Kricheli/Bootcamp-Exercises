import React, { useState } from "react";

const TimeTeller = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = ({ target: {value} }) => {
    setSeconds(value);
    setMinutes(value / 60);
    setHours(value / 3600);
  };
  const handleMinutes = ({ target: {value} }) => {
    setSeconds(value * 60);
    setMinutes(value);
    setHours(value / 60);
  };
  const handleHours = ({ target: {value} }) => {
    setSeconds(value * 3600);
    setMinutes(value * 60);
    setHours(value);
  };
  return <div>
    <div>
      <label htmlFor="seconds">Seconds</label>
      <input onChange={handleSeconds} type='number'id="seconds" value={seconds}/>
    </div>
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input onChange={handleMinutes} type='number'id="minutes" value={minutes}/>
    </div>
    <div>
      <label htmlFor="hours">Hours</label>
      <input onChange={handleHours} type='number'id="hours" value={hours}/>
    </div>
  </div>;
};
export default TimeTeller;
