import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="home" smooth={true} duration={500} className="logo">
        <img src={logo} alt="Logo" style={{ height: '60px', width: '120px' }} />
      </Link>

      {/* Hamburger Icon (only mobile) */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Navigation Menu */}
      <ul className={`navmenu ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="hero" smooth={true} duration={300} onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>

      {/* Connect Button (hidden on mobile via CSS) */}
      <Link to="contact" smooth={true} duration={500} className="nav-connect">
        Connect With Me
      </Link>
    </div>
  );
}

export default Navbar;

