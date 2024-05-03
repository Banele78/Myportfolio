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
        <a href="https://incandescent-dasik-cdbd3e.netlify.app/">PostHub</a>
        <p className="bottom-left">hello world</p>
        
      </div>
      <div className="image">
        <p className="bottom-left">hello world</p>
       
      </div>
      <div className="image">
        
        <p className="bottom-left">hello world</p>
      </div>
      </div>

  </div>

  <a className="next" id="nextBtn" onClick={handleNextButtonClick}>&#10095;</a>

  </div>
  </div>
  )
}

export default Projects
