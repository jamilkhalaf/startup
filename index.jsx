import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./components/headerPreLogin";
import Footer from "./components/footer";
import About from "./components/about"; 
// import AboutPostLogin from "./AboutPostLogin";
// import Home from "./Home";
// import Game from "./Game";
// import Leaderboard from "./Leaderboard";

import Login from "./components/login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const handleCreate = () => {
        setIsLoggedIn(true);
    };
  
    return (
      <BrowserRouter>
        <div className="app-container">
          {!isLoggedIn && (
            <body className="app-login">
              <Header />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </body>
            
          )}
  
          {isLoggedIn && (
            <div className="app-post-login">
              <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about-post-login">About Post Login</NavLink>
                <NavLink to="/game">Game</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </nav>
  
              <main>
                <Routes>
                  {/* <Route path="/home" element={<Home />} />
                  <Route path="/about-post-login" element={<AboutPostLogin />} />
                  <Route path="/game" element={<Game />} />
                  <Route path="/leaderboard" element={<Leaderboard />} /> */}
                </Routes>
              </main>
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
