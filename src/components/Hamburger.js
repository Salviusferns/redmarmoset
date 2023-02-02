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
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/" class="center">Home</a></span></span>
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/" class="center">Home</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="16" onclick>
                Games
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/games" class="center">Games</a></span></span>
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/games" class="center">Games</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="12" onclick>
                Team
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/team" class="center">Team</a></span></span>
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/team" class="center">Team</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="8" onclick>
                Careers
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/careers" class="center">Careers</a></span></span>
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/careers" class="center">Careers</a></span></span>
              </li>
              <li class="Menu-list-item" data-offset="8" onclick>
                Contact
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/contact" class="center">Contact</a></span></span>
                <span class="Mask"><span ><a href="https://www.redmarmosetstudios.com/contact" class="center">Contact</a></span></span>
              </li>
              
            </ul>
            </nav>
            </div>

              )
          }