import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [intervalCallCount, setIntervalCallCount] = useState(0);
  const [isIntervalActive, setIntervalActive] = useState(false);

  function intervalCallback() {
    setIntervalCallCount(intervalCallCount + 1);
  }

  useEffect(() => {
    let interval = null
    if (isIntervalActive) {
      interval = setInterval(intervalCallback, 1000)
    }

    return function cleanup() {
      if(interval) {
        clearInterval(interval)
      }
    }
  });

  return (
    <div>
      <button onClick={() => setIntervalActive(true)}>Start interval</button>
      <button onClick={() => setIntervalActive(false)}>Stop interval</button>
      {" "}
      {intervalCallCount}
    </div>
  );
}

export default App;
