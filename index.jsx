import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HeaderPre from "./components/headerPreLogin";
import Footer from "./components/footer";
import About from "./components/about"; 
import Home from "./components/home";
import Game from "./components/game";
import Leaderboard from "./components/leaderboards";
import HeaderPost from "./components/headerPostLogin";


import Login from "./components/login";

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
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
