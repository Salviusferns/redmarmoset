import './styles.css';
export default function Hamburger(){
    return(
        <div class="Menu">
  <ul class="Menu-list" data-offset="10">
    <li class="Menu-list-item" data-offset="20" onclick>
      Home
      <span class="Mask"><span>Home</span></span>
      <span class="Mask"><span>Home</span></span>
    </li>
    <li class="Menu-list-item" data-offset="16" onclick>
      Games
      <span class="Mask"><span>Games</span></span>
      <span class="Mask"><span>Games</span></span>
    </li>
    <li class="Menu-list-item" data-offset="12" onclick>
      Team
      <span class="Mask"><span>Team</span></span>
      <span class="Mask"><span>Team</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8" onclick>
      Careers
      <span class="Mask"><span>Careers</span></span>
      <span class="Mask"><span>Careers</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8" onclick>
      Contact
      <span class="Mask"><span>Contact</span></span>
      <span class="Mask"><span>Contact</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8" onclick>
      Login/Register
      <span class="Mask"><span>Login/Register</span></span>
      <span class="Mask"><span>Login/Register</span></span>
    </li>
  </ul>
</div>
    )
}