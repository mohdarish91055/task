import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
   const [darkMode, setDarkMode] = useState();

  const toggleNav = () => {
    setNavOpen(prevState => !prevState); // Simplified state toggle
  };


    const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', !prev); // Save preference
      return !prev;
    });
  };
    useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  


  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <nav className={`nav ${navOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button
        className={`hamburger ${navOpen ? "open" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="dark-mode-toggle"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

    </header>
  );
};

export default Header;
