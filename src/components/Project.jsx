import React from 'react'
import "./MyWork.css"
import theme_pattern from "../assets/theme_pattern.svg"
import mywork_data from "../assets/mywork_data"
import arrow_icon from "../assets/arrow_icon.svg"
function MyWork() {
  return (
    <div className='mywork' id="project">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt=""/>
      </div>
     <div className="mywork-container">
  {mywork_data.map((worker, index) => {
    return (
      <a key={index} href={worker.w_link} target="_blank" rel="noopener noreferrer">
        <img src={worker.w_img} alt={`Project ${index + 1}`} />
      </a>
    )
  })}
</div>
     <div className="mywork-showmore">
       <p>
        Show More
       </p>
       <img src={arrow_icon}/>
       <img/>

     </div>

    </div>
  )
}

export default MyWork
