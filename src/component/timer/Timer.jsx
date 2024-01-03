import { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = ({ setAnimStart }) => {
  const [seconds, setSeconds] = useState(3.89); // Initial value is 60 seconds
  const [isTimerStart, setIsTimerStart] = useState(true);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!isTimerStart) {
      return;
    }

    const timer = setInterval(() => {
      // Decrement seconds
      setSeconds((prevSeconds) => (prevSeconds - 0.5).toFixed(2));
    }, 1000);

    setTimer(timer);
  }, [isTimerStart]); // Empty dependency array to run the effect only once on mount

  // Reset the timer when it reaches 0
  useEffect(() => {
    if (seconds <= 0) {
      setIsTimerStart(false);
      clearInterval(timer);
      setAnimStart(true);

      setTimeout(() => {
        setIsTimerStart(true);
        setSeconds(3.89);
        setAnimStart(false);
      }, 5000);
    }
  }, [seconds, timer]);

  return (
    <div className={styles.timerContainer}>
      <span>Rolling</span>
      <div>{seconds > 0 ? seconds : "0: 00"}</div>
    </div>
  );
};

export default Timer;
