import "./styles.css";
import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = Math.floor(newSeconds / 60);
          const newHours = Math.floor(newMinutes / 60);

          return {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60,
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div>
      <h3>
        {time.hours}h {time.minutes}m {time.seconds}s
      </h3>
      <button onClick={startTimer}>Clock in</button>
      <button onClick={stopTimer}>Clock out</button>
      <button onClick={resetTimer}>Reset Clock</button>
    </div>
  );
}

export default Timer;
