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
            <p>
    Hi, I’m <strong>Komal Deshmukh</strong>, a passionate front-end developer with a strong
    foundation in modern web technologies. I specialize in building clean,
    responsive, and user-friendly web applications.
  </p>
  <p>
    My core skills include <strong>HTML</strong>, <strong>CSS</strong>, 
    <strong> JavaScript</strong>, <strong>React.js</strong>, and 
    <strong> Tailwind CSS</strong>. I enjoy turning creative ideas into functional
    interfaces and continuously improving my skills to stay updated with
    the latest trends in web development.
  </p>
  <p>
    Beyond coding, I love solving challenges, experimenting with new tools,
    and working on projects that make a meaningful impact.
  </p>
        </div>
     </div>
     
    </div>
    </div>
  )
}

export default About
