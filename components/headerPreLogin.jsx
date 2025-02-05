import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/header.css";

const HeaderPre = () => {
  return (
    <header>
      <nav>
        <h1>Startup App</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPre;
