import React from 'react'
import image from "./banele.jpg";

function About() {
  return (
    
    

      
    <div className="about" id="about">
           {//About section
}
        <img src={image}/>
        <div className="hd2">
        <button className="hd">About</button>
        </div>
        <div className="para">
        <p>I recently graduated from Richfield Institute with a diploma in Information Technology.
           I am a dedicated individual actively seeking opportunities in software development.
            Whether it's a freelance job or a permanent role in a company,
             I am ready to contribute my skills and enthusiasm to meaningful projects. </p>
            </div>
    </div>

    
  )
}

export default About
