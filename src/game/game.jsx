import React, { useEffect } from "react";

import "./game.css";
import { initializeGame } from "./gamejavascript";

const Game = () => {
    useEffect(() => {
        initializeGame();
      }, []);
    return (
        <main className="game">
        <h2>Memory Game</h2>    
            <h3>Score: <span id="result"></span></h3>
            <div id="timeElasped">Time: <span id="time"></span></div>
            <button id="restartButton">Restart Game</button>
            <div className="grid-container">
                    <div className="grid"></div>
            </div>
        
    
        <div class="placeholder-container">
            <p id="third-party-placeholder">(Placeholder for service call to fetch images when a player wins)</p>
            <p id="websocket-placeholder">(Placeholder for WebSocket connection for real-time updates)</p>
        </div>
        </main>
    );
  };
  
  export default Game;