import React from 'react';
import './alert.css'; // Import the custom styles for the alert

function CustomAlert({ message, onClose }) {
  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <h2>{message}</h2>
        <a className="close" href="#" onClick={onClose}>
          &times;
        </a>
        <div className="content">
          {message}
        </div>
      </div>
    </div>
  );
}

export default CustomAlert;
