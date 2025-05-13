// import React from 'react'
// import "./Navbar.css"
// import logo from "../assets/logo.png"
// function Navbar() {
//   return (
//     <div className="navbar">
//     <img src={logo} alt="Logo" style={{ height: '100px', width: '150px' }} />
//      <ul className="navmenu">
//         <li><AnchorLink></AnchorLink>Home</li>
//         <li>About Me</li>
//         <li>Services</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//      </ul>
//      <div className="nav-connect">Connect With Me</div>
//     </div>
   
//   )
// }

// export default Navbar
import React from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from 'react-scroll'; // Import the Link component

function Navbar() {
  return (
    <div className="navbar">
      <Link to="home" smooth={true} duration={500} className="logo">
        <img src={logo} alt="Logo" style={{ height: '100px', width: '150px' }} />
      </Link>
      <ul className="navmenu">
        <li>
          <Link to="hero" smooth={true} duration={300}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link>Skills</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <Link to="contact" smooth={true} duration={500}><div className="nav-connect">Connect With Me</div></Link>
      
    </div>
  );
}

export default Navbar;
