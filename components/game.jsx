import React from "react";

import "../styles/game.css";

const Home = () => {
    return (
        <main class="game">
        <h2>Memory Game</h2>
        <p>The game will appear below. Get ready to have some fun!</p>
    
        <div>
            <img src="../images/image.png">
            </img>
        </div>
    
        <div class="placeholder-container">
            <p id="third-party-placeholder">(Placeholder for service call to fetch images when a player wins)</p>
            <p id="websocket-placeholder">(Placeholder for WebSocket connection for real-time updates)</p>
        </div>
        </main>
    );
  };
  
  export default Home;