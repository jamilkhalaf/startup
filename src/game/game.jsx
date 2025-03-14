import React, { useState, useEffect } from "react";

import "./game.css";
import { initializeGame } from "./gamejavascript";



const Game = () => {

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [playerName, setPlayerName] = useState(""); // You can replace this with dynamic input

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('/api/user/me');
        if (response.ok) {
          const data = await response.json();
          setPlayerName(data.email);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    // Initialize the game only once when playerName is available
    if (playerName) {
      initializeGame(playerName);
    }
  }, [playerName]);

  useEffect(() => {
    
    // Initialize the game    
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
      <h3 className="player-name">{playerName ? `Player: ${playerName}` : "Loading..."}</h3>
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
