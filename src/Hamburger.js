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
      About
      <span class="Mask"><span>About</span></span>
      <span class="Mask"><span>About</span></span>
    </li>
    <li class="Menu-list-item" data-offset="12" onclick>
      Work
      <span class="Mask"><span>Work</span></span>
      <span class="Mask"><span>Work</span></span>
    </li>
    <li class="Menu-list-item" data-offset="8" onclick>
      Contact
      <span class="Mask"><span>Contact</span></span>
      <span class="Mask"><span>Contact</span></span>
    </li>
  </ul>
</div>
    )
}