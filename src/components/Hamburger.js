import './Hamburger.css';
import React, { useState } from "react";
export default function Hamburger(){
    const [isOpen, setIsOpen] = useState(false);
  
    return(
    <div>
            <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>


      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul class="Menu-list" data-offset="10">
              <li class="Menu-list-item" data-offset="20" onclick>
                Home
                <span class="Mask"><span ><a href="#Home" class="center">Home</a></span></span>
                <span class="Mask"><span ><a href="#Home" class="center">Home</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="16" onclick>
                Games
                <span class="Mask"><span ><a href="#Games" class="center">Games</a></span></span>
                <span class="Mask"><span ><a href="#Games" class="center">Games</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="12" onclick>
                Team
                <span class="Mask"><span ><a href="#Team" class="center">Team</a></span></span>
                <span class="Mask"><span ><a href="#Team" class="center">Team</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="8" onclick>
                Careers
                <span class="Mask"><span ><a href="#Careers" class="center">Careers</a></span></span>
                <span class="Mask"><span ><a href="#Careers" class="center">Careers</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="8" onclick>
                Contact
                <span class="Mask"><span ><a href="#Contact" class="center">Contact</a></span></span>
                <span class="Mask"><span ><a href="#Contact" class="center">Contact</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="8" onclick>
                Login/Register
                <span class="Mask"><span ><a href="#Login/Register" class="center">Login/Register</a></span></span>
                <span class="Mask"><span><a href="#Login/Register" class="center">Login/Register</a></span></span>
                
              </li>
              
            </ul>
            </nav>
            </div>

              )
          }