import React from "react";
import { NavLink } from 'react-router-dom';
import "./header.css";

const HeaderPost = () => {
  return (
    <header>
      <nav>
        <h1>Startup App</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/game">Game</NavLink></li>
          <li><NavLink to="/leaderboards">Leaderboards</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPost;
