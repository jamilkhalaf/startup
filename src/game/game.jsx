import React, { useState, useEffect } from "react";
import "./game.css";
import { initializeGame } from "./gamejavascript";
import { GameEvent, GameNotifier } from './gameEvents';


const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [playerName, setPlayerName] = useState(""); // You can replace this with dynamic input
  const [message, setMessage] = useState(""); // For the new message input
  const [messages, setMessages] = useState([]); // Array to hold messages
  const [eventMessage, setEventMessage] = useState(""); // New state for event message

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
        GameNotifier.broadcastEvent(playerName, GameEvent.Start, {});
      initializeGame(playerName);
    }
  }, [playerName]);

    // Listen for events and update eventMessage state
    useEffect(() => {
        const handler = (event) => {
            if (event.type === GameEvent.Start) {
              setEventMessage(`${event.from} has joined!`);
            }
            if (event.type === GameEvent.End) {
              setEventMessage(`${event.from} has finished in ${event.value}!`);
            }
            if (event.type === GameEvent.Chat) {
                // Add incoming chat message to the messages state
                setMessages((prevMessages) => {
                  const newMessages = [
                    ...prevMessages,
                    `${event.from}: ${event.value}`,
                  ];
                  if (newMessages.length > maxMessages) {
                    newMessages.shift(); // Keep the max number of messages
                  }
                  return newMessages;
                });
              }

          };
        
          GameNotifier.addHandler(handler);
    
        return () => {
          // Cleanup handler when the component unmounts
          GameNotifier.removeHandler(handler);
        };
      }, []);

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
    // Call the game logic's restartGame function if available
    if (window.gameRestart) {
      window.gameRestart();
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendChatMessage = (msg) => {
    // Broadcast the chat message
    GameNotifier.broadcastEvent(playerName, GameEvent.Chat, msg);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
  
    if (message.trim() !== "") {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, `${playerName ? playerName : "Unknown"}: ${message}`];
        if (newMessages.length > maxMessages) {
          newMessages.shift();
        }
        return newMessages;
      });
      setMessage(""); // Clear input field after sending the message
      
      // Send the message via broadcastEvent
      sendChatMessage(message);
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
    
      {eventMessage && <h2 id='eventMessage'>{eventMessage}</h2>}
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