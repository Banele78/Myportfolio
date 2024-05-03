import React from 'react'
import { useState,useEffect, useRef } from 'react';
import PostHub from "./PostHub.png"

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
      <img src={PostHub}/>
        <div className="contenetForProjects">
          <h2>Social media app</h2>
          <h3>To start using the app, create an account, then log in. Once logged in, you
             can create your posts, view the posts of other users, comment on their posts, and like their posts.</h3>
          
        </div>
       
        <p className="bottom-left">
           
        <a href="https://incandescent-dasik-cdbd3e.netlify.app/">View PostHub</a>
        </p>
        
      </div>
      <div className="image">
      <p className="bottom-left"> 
        <a href="https://incandescent-dasik-cdbd3e.netlify.app/">Hello word</a>
        </p>
       
      </div>
      <div className="image">
        
      <p className="bottom-left"> 
        <a href="https://incandescent-dasik-cdbd3e.netlify.app/">PostHub</a>
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
