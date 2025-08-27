import React from 'react'
import "./Hero.css"
import komal from "../assets/komal.jpeg"

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="round-image-container">
        <img src={komal} alt="Komal" className="round-image" />
      </div>  
      <h1><span>I am Komal Deshmukh </span>Full stack developer based in India</h1>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <a 
          href="/Komal_Deshmukh_Resume.pdf" 
          download="Komal_Deshmukh_Resume.pdf" 
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero

