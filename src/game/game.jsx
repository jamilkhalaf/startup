import React, { useState, useEffect } from "react";

import "./game.css";
import { initializeGame } from "./gamejavascript";



const Game = ({userName}) => {

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const playerName = userName; // You can replace this with dynamic input

  useEffect(() => {
    // Initialize the game
    initializeGame(playerName);
    
    const displayPlayerData = () => {
        console.log(`Player: ${playerName}, Score: ${score}, Time: ${time}`);
      };
  
      // Display score and time whenever they are updated
      displayPlayerData();
  }, [score, time, playerName]); // Re-run the effect when score, time, or playerName change


  const restartGame = () => {
    // Reset React state
    setScore(0);
    setTime(0);
    // Reset the WebSocket placeholder text
    const wsPlaceholder = document.querySelector('#websocket-placeholder');
    if (wsPlaceholder) {
      wsPlaceholder.innerHTML = "<p>(Placeholder for WebSocket connection for real-time updates)</p>";
    }
    // Call the game logic's restartGame function if available
    if (window.gameRestart) {
      window.gameRestart();
    }
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
        <p id="websocket-placeholder" >(Placeholder for WebSocket connection for real-time updates)</p>
      </div>
    </main>
  );
};

export default Game;
