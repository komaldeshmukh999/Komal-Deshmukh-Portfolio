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
      <p>I am a Full stack developer based in India,I have 1 year Experince in Web development</p>
      <div className="hero-action">
       <div className="hero-connect">Connect with me</div>
       <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
