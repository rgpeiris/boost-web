import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  timeInSeconds?: number; // Accept time in seconds as a prop
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timeInSeconds = 300,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(timeInSeconds); // Use the prop as the initial time

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when the timer reaches 0

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId); // Clean up the interval on component unmount
    };
  }, [timeLeft]);

  // Format the time to MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <span style={{ fontSize: '12px', fontWeight: '600', color: '#231F20' }}>
      {formatTime(timeLeft)}
    </span>
  );
};

export default CountdownTimer;
