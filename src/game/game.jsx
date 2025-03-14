import React, { useState, useEffect } from "react";
import "./game.css";
import { initializeGame } from "./gamejavascript";

const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [playerName, setPlayerName] = useState(""); // You can replace this with dynamic input
  const [message, setMessage] = useState(""); // For the new message input
  const [messages, setMessages] = useState([]); // Array to hold messages

  const maxMessages = 4; // Maximum number of messages in the chat box

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
  }, [score, time, playerName]);

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

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Update message input value
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
  
    if (message.trim() !== "") {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, `${playerName ? playerName : "Unknown"}: ${message}`];
        if (newMessages.length > maxMessages) {
          newMessages.shift(); // Remove the oldest message if we exceed the limit
        }
        return newMessages;
      });
      setMessage(""); // Clear input field after sending the message
    }
  };

  return (
    <main className="game">
      <h2 id="memory">Memory Game</h2>
      <h3 className="player-name">{playerName ? `Player: ${playerName}` : "Loading..."}</h3>
      <h3>Score: <span id="result">{score}</span></h3>
      <div id="timeElasped">Time: <span id="time">{time}</span></div>
      <button id="restartButton" onClick={restartGame}>Restart Game</button>
      <div className="grid-container">
        <div className="grid"></div>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        <h4>Chat</h4>
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>

        {/* Add form to handle message input */}
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={handleMessageChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
};

export default Game;
