import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useRef } from "react";
import { useCallback } from "react";


import "./authenticated.css";

export function Authenticated(props) {
    const navigate = useNavigate();
    const timerIdRef = useRef(null);

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }
    function resetTimer() {
        // Clear any existing timer
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = setTimeout(() => {
          logout();
        }, 30000);
      }
      useEffect(() => {
        // List of events to consider as "activity"
        const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    
        // Attach event listeners to the window to monitor user activity
        events.forEach((event) => {
          window.addEventListener(event, resetTimer);
        });
    
        // Start the initial timer
        resetTimer();
    
        // Cleanup function: Remove event listeners and clear timer on unmount
        return () => {
          events.forEach((event) => {
            window.removeEventListener(event, resetTimer);
          });
          if (timerIdRef.current) {
            clearTimeout(timerIdRef.current);
          }
        };
      }, []);
    const [joke, setJoke] = useState("");

    // Function to fetch the joke
    const fetchJoke = async () => {
        try {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" },
        });
        let data = await response.json();
        setJoke(data.joke); // Update the state with the joke
        } catch (error) {
        console.error("Error fetching joke:", error);
        setJoke("Failed to load joke."); // Set a fallback message in case of error
        }
    };

    // Fetch joke when the component mounts
    useEffect(() => {
        fetchJoke();
    }, []);

    const handlePlayClick = () => {
        navigate("/game");
    };
    return (
        <main className="home">
        <div id="joke-container">
            <h2>Random Joke of the Day</h2>
            <div id="joke">{joke}</div>
        </div>
        <form>
            <button type="button" onClick={logout}>Logout</button>
            <button type="button"onClick={handlePlayClick}>play</button>
        </form>
        </main>
    );
  };
  