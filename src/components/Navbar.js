import React from 'react'
import { useState,useEffect, useRef } from 'react';


function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
const sticky = 0; // Set your sticky offset position here
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
useEffect(() => {
    const handleScroll = () => {
        const scrolledPastSticky = window.pageYOffset > sticky;
        setIsSticky(scrolledPastSticky);
    };

    window.addEventListener('scroll', handleScroll);

}, []);

const toggleDropdown = () => {
    console.log("Dropdown toggled");
    setIsDropdownOpen(!isDropdownOpen);
    // Toggle body overflow to prevent scrolling when dropdown is open
    console.log("Dropdown open:", isDropdownOpen);
    document.body.style.overflowY = isDropdownOpen ?  'auto' : 'hidden';
  };
  return (
    <div className={`navbar ${isSticky ? 'sticky ulAdd' : ' '}`} id="myNavbar" >
      {//code for the big screens navbar
      }
        <ul id="listAdd">
          <li className="left"><a href="#about">About</a></li>
         <li className="left"><a href="#project">Projects</a></li>
           <li className="left"><a href="#contact">Contact</a></li>
         </ul>
         <div className="center">Banele Nhlapo</div>
         <div >
         
          <a href="BaneleCV.pdf" download="Banele Ndivhuwo Nhlapo CV" className="right">My resume <i className="fa-solid fa-download" style={{ color: 'black'}}></i></a>
        </div>
        
{//code for the mobile navbar
}
         <div className="mobile" >

         <div className="toggle_btn"  onClick={toggleDropdown}>
          <i className={isDropdownOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
         </div>

         <div className="name">
          <li className=""> Banele</li>
         </div>
        </div>

        {//dropDown menu for mobile navbar
}
{isDropdownOpen && (
         <div className="dropdown_menu open ">
          <li onClick={toggleDropdown}><a href="#about" >About</a></li>
          <li onClick={toggleDropdown}><a href="#project">Projects</a></li>
          <li onClick={toggleDropdown}><a href="#contact">Contact</a></li>
           <li onClick={toggleDropdown}><a href="BaneleCV.pdf" download="Banele Ndivhuwo Nhlapo CV" className="resume">My resume<i className="fa-solid fa-download" ></i></a></li>
         </div>
         )}
         </div>
  )
}

export default Navbar
