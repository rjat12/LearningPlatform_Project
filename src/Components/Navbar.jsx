import React, {useState } from 'react'; 
import logo from '../images/logo.png';
import LoginPopup from './LoginPopup'


function Navbar()
{
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    const handleCloseLogin = () => {
      setShowLogin(false);
    };

const [nav, setnav] = useState(false);

const changeBackground = ()=>{

if(window.scrollY >= 50) { setnav(true);

} else{

setnav(false);

}

}

window.addEventListener('scroll', changeBackground);

return (

<nav className={nav ? 'nav active' : 'nav'}> 
<a href="#" className="logo"> <img src={logo} alt=''/></a>

<input type="checkbox" className='menu-btn' id='menu-btn'/>

<label className='menu-icon' for='menu-btn'> 
<span className="nav-icon"></span>

</label>

<ul className="menu">

<li><a href="#">Explore</a></li>
 <li><a href="#">Create</a></li>

<li><a href='#'>Events</a></li>
<li><a href='#' onClick={handleLoginClick}>Sign up</a></li>
{showLogin && <LoginPopup onClose={handleCloseLogin} />}

<li><a href='#' onClick={handleLoginClick}>Login</a></li>
{showLogin && <LoginPopup onClose={handleCloseLogin} />}
</ul>

</nav>

)

}

export default Navbar;