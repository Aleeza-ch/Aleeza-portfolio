import React, { useState } from 'react';
import './Navbar.css';
import nav_dropdown from '../Assets/dropdown_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('Hero');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <a href="#">
          <h4>Aleeza's Portfolio</h4>
        </a>
      </div>
      <img
        className={`nav-dropdown ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        src={nav_dropdown}
        alt="Menu"
      />
      <ul className={`nav-menu ${isOpen ? 'nav-menu-visible' : ''}`}>
        <li>
          <a href="#hero" style={{ textDecoration: 'none', color: menu === "Hero" ? 'crimson' : ' #6f6f70ff' }}
          onClick={() => setMenu('Hero')}>Hero</a>
        </li>
        <li>
          <a href="#about" style={{ textDecoration: 'none', color: menu === "About" ? 'crimson' : '#6f6f70ff' }}
          onClick={() => setMenu('About')}>About</a>
        </li>
        <li>
          <a href="#services" style={{ textDecoration: 'none', color: menu === "Services" ? 'crimson' : '#6f6f70ff' }}
          onClick={() => setMenu('Services')}>Services</a>
        </li>
        <li>
          <a href="#skills" style={{ textDecoration: 'none', color: menu === "Skills" ? 'crimson' : '#6f6f70ff' }}
          onClick={() => setMenu('Skills')}>Skills</a>
        </li>
        <li>
          <a href="#contact" style={{ textDecoration: 'none', color: menu === "Contact" ? 'crimson' : '#6f6f70ff' }}
          onClick={() => setMenu('Contact')}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
