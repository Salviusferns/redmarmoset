import './Profile.css'
import Hero from './images/profile.png'
import Hamburger from './Hamburger'
export default function Profile(){
    return(
        <div>
            <Hamburger/>
            <img class="n-1-p7f" src={Hero} id="1:4"/>
        </div>
    )
}