import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HeaderPre from "./header/headerPreLogin";
import Footer from "./footer/footer";
import About from "./about/about"; 
import Home from "./home/home";
import Game from "./game/game";
import Leaderboard from "./leaderboard/leaderboards";
import HeaderPost from "./header/headerPostLogin";


import Login from "./login/login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const savedLoginState = localStorage.getItem("isLoggedIn");
      return savedLoginState === "true";
    });

    // Update local storage whenever the login state changes
    useEffect(() => {
      localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleCreate = () => {
      setIsLoggedIn(true);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn"); // Clear the login state from local storage
    };
  
    return (
      <BrowserRouter>
        <div className="app-container">
          {!isLoggedIn && (
            <div className="app-login">
              <HeaderPre />
              <Routes>
              <Route path="/" element={<Login handleLogin={handleLogin} handleCreate={handleCreate} />} />               
              <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </div>
            
          )}
  
          {isLoggedIn && (
            <div className="app-post-login">
                <HeaderPost />
                <Routes>
                  <Route path="/" element={<Home handleLogout={handleLogout}/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/game" element={<Game />} />
                  <Route path="/leaderboards" element={<Leaderboard />} /> 
                </Routes>
                <Footer />
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;
