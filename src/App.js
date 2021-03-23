import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [intervalCallCount, setIntervalCallCount] = useState(0);
  const [isIntervalActive, setIntervalActive] = useState(false);
  
  useEffect(() => {
    let id = null
    
    if (isIntervalActive) {
      id = setInterval(() => setIntervalCallCount(c => c + 1), 1000)
    } 

    return function cleanup() {
      if(id) {
        clearInterval(id)
      }
    }

  }, [isIntervalActive]);

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
