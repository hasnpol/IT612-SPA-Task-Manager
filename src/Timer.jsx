import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalHours, setTotatHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [total, setTotal] = useState("0:00");
  const [isSubmitted, setIsSubmitted] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);

          if (minutes === 59) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
          }
        }
      }, 1000); // set this to '1' to test functionality of Total Hours in Pay-Period.
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  const handleStart = () => {
    if (isSubmitted === true) {
      setIsRunning(true);
    } else {
      alert("Please Submit Your Hours Before Clocking In Again!");
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsSubmitted(false);
    if (totalMinutes + minutes > 59) {
      setTotatHours(totalHours + hours + 1);
      setTotalMinutes((totalMinutes + minutes) % 60);
    } else {
      setTotatHours(totalHours + hours);
      setTotalMinutes(totalMinutes + minutes);
    }
  };

  const handleTotalHours = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
    setIsSubmitted(true);
    if (totalMinutes < 10) {
      setTotal(`${totalHours}:0${totalMinutes}`);
    } else {
      setTotal(`${totalHours}:${totalMinutes}`);
    }
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>{`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Clock in
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Clock out
      </button>
      <button onClick={handleTotalHours}> Submit</button>
      <br />
      <p></p>
      <label>Total Hours in Pay-Period: </label>
      <input value={total} />
    </div>
  );
};

export default Timer;
