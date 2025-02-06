import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HeaderPre from "./headerPreLogin";
import Footer from "./footer";
import About from "./about"; 
import Home from "./home";
import Game from "./game";
import Leaderboard from "./leaderboards";
import HeaderPost from "./headerPostLogin";


import Login from "./login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleCreate = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
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
                  <Route path="/about2" element={<About />} />
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
