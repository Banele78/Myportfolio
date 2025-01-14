import React from 'react'
import { useState,useEffect, useRef } from 'react';




function Projects() {
    const scrollContainerRef = useRef(null);

useEffect(() => {
  const handleScroll = (evt) => {
    const container = scrollContainerRef.current;
    container.scrollLeft += evt.deltaY;
    container.style.scrollBehavior = "auto";
    evt.preventDefault();
  };

  const container = scrollContainerRef.current;
  container.addEventListener('wheel', handleScroll, { passive: false });

  return () => {
    container.removeEventListener('wheel', handleScroll);
  };
}, []);


  const handleNextButtonClick = () => {
    scrollContainerRef.current.style.scrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft += 900;
  };

  const handleBackButtonClick = () => {
    scrollContainerRef.current.style.scrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft -= 900;
  };

  return (
    <div className="projects" id="project">
    <div className="hd1">
      <button className="hd" id="projectBtn">Projects</button>
    </div>
    


<div className="gallery-wrap">
  <a className="prev" id="backBtn" onClick={handleBackButtonClick} >&#10094;</a>
  <div className="gallery"  ref={scrollContainerRef} > 
   
    <div className="container">
      <div className="image">
      <img src="/Group 20.png" style={{ height:'100px', }}/>
        <div className="contenetForProjects">
          <div className='ToolsList'>
          <div className='Tools'>React.js</div>
          
          <div className='Tools '>CSS</div>
          <div className='Tools'>Spring boot</div>
          
          
          </div>
          <h2>Social media app</h2>
          <h3>AesthesticsHub is a social media platform designed to bring people closer together. 
             Once logged in, you can create posts, view posts of other users, comment on
             their posts, and like their posts.</h3>
        </div>
       
        <p className="bottom-left">     
        <a href="https://aesthesticshub.netlify.app" className='aesthesticsHub'>View AesthesticsHub</a>
        </p>
        
      </div>

      <div className="image">
    <img src="/chatapp.png" />
    <div className="contenetForProjects">
          <div className='ToolsList'>
          <div className='Tools React'>React</div>
          <div className='Tools'>javaScript</div>
          <div className='Tools CSS'>CSS</div>
          <div className='Tools Nodejs'>firebase</div>
          </div>
          <h2>Chat App</h2>
          <h3>ConvoSync is a chat application designed to enhance your 
            communication experience. Whether you're connecting with friends, family, or colleagues,
             ConvoSync offers a seamless, secure, and engaging platform for all your messaging needs.</h3>
        </div>
        <p className="bottom-left"> 
          <a href="https://convosync.netlify.app/">View ConvoSync</a>
          </p>
        </div>
      <div className="image">
      <img src="/Calculator.png"/>
      <div className="contenetForProjects">
          <div className='ToolsList'>
          <div className='Tools React'>React</div>
          <div className='Tools'>javaScript</div>
          <div className='Tools CSS'>CSS</div>
          <div className='Tools Nodejs'>HTML</div>
          </div>
          <h2>Calculator app</h2>
          <h3>It is has basic Calculator operations like adding, subtracting, dividing, and multipling numbers.</h3>
          
        </div>
      <p className="bottom-left"> 
        <a href="https://numwise.netlify.app/">View Calculator</a>
        </p>
       
      </div>
      
      </div>

  </div>

  <a className="next" id="nextBtn" onClick={handleNextButtonClick}>&#10095;</a>

  </div>
  </div>
  )
}

export default Projects
