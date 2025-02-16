import React, { useState, useEffect } from "react";

import "./game.css";
import { initializeGame } from "./gamejavascript";

const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [playerName] = useState("Player 1"); // You can replace this with dynamic input

  useEffect(() => {
    // Initialize the game
    initializeGame();
    
    const displayPlayerData = () => {
        console.log(`Player: ${playerName}, Score: ${score}, Time: ${time}`);
      };
  
      // Display score and time whenever they are updated
      displayPlayerData();
  }, [score, time, playerName]); // Re-run the effect when score, time, or playerName change


  const restartGame = () => {
    setScore(0);  // Reset score
    setTime(0);  // Reset time
    document.querySelector('#websocket-placeholder').textContent = "Placeholder for WebSocket connection for real-time updates";
  };

  return (
    <main className="game">
      <h2>Memory Game</h2>
      <h3>Score: <span id="result">{score}</span></h3>
      <div id="timeElasped">Time: <span id="time">{time}</span></div>
      <button id="restartButton" onClick={restartGame}>Restart Game</button>
      <div className="grid-container">
        <div className="grid"></div>
      </div>
      
      <div className="placeholder-container">
        <p id="websocket-placeholder">(Placeholder for WebSocket connection for real-time updates)</p>
      </div>
    </main>
  );
};

export default Game;
