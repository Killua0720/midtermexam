import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDisplay, setCurrentDisplay] = useState("10 Things That Require Zero Talent"); // Default display
  const name = "Jan Raymond Soriano"; // Keeping name as a constant

  // Array of items to display
  const items = [
    "1 - Being On Time",
    "2 - Making An Effort",
    "3 - Being High Energy",
    "4 - Having A Positive Attitude",
    "5 - Being Passionate",
    "6 - Using Good Body Language",
    "7 - Being Coachable",
    "8 - Doing A Little Extra",
    "9 - Being Prepared",
    "0 - Having A Strong Work Ethic",
  ];

  // Handle button click
  const handleButtonClick = (index) => {
    if (index < 9) {
      setCurrentDisplay(items[index]);
    } else if (index === 9) {
      setCurrentDisplay("0 - Having A Strong Work Ethic");
    }
  };

  const handleReset = () => {
    setCurrentDisplay("10 Things That Require Zero Talent");
  };

  const handleNameDisplay = () => {
    setCurrentDisplay(name.toUpperCase());
  };

  return (
    <div className="App">
      <h1>{name} - IT3A</h1>
      <h2>{currentDisplay}</h2>
      <div className="button-container">
        {items.map((item, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleNameDisplay}>NAME</button>
      </div>
    </div>
  );
}

export default App;
