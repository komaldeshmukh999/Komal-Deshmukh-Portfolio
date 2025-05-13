import React from 'react'
import "./About.css"
import theme_pattern from "../assets/theme_pattern.svg"
import komal from "../assets/komal.jpeg"
function About() {
  return (
    <div id="about" className='about'>
     <div className="about-title">
     <h1>About me</h1>
     <img src={theme_pattern}/>

     </div>
     
     <div className="about-sections">
     <div className="about-left">
        <img src={komal} alt="" className="squareimage"/>
     </div>
     <div className="about-right">
        <div className="about-para">
            <p>I am a experinece Full stack developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta, perspiciatis voluptate iste aliquid officia, a illum, repellat numquam voluptates saepe eos laudantium doloremque. Maxime debitis expedita delectus a ut.

            </p>
        </div>
     </div>
     
    </div>
    </div>
  )
}

export default About
