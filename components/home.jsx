import React from "react";
import { useState, useEffect } from "react";


import "../styles/home.css";

const Home = () => {
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
    return (
        <main class="home">
            <div id="joke-container">
                <h2>Random Joke of the Day</h2>
                <div id="joke">{joke}</div>
            </div>
            <form>
                <button type="button">Logout</button>
                <button type="button">play</button>
            </form>
        </main>
    );
  };
  
  export default Home;