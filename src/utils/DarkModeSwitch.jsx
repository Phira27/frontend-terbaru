// src/components/DarkModeSwitch.js
import React from 'react';
import './DarkModeSwitch.css';

const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <label className="dark-mode-switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider">
        <span className="icon sun">☀️</span>
        <span className="icon moon">🌙</span>
      </span>
    </label>
  );
};

export default DarkModeSwitch;