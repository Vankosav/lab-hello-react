import ironhackLogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png';

function Navbar () {
    return (
        <nav>
        <img id="nav-img1" src={ironhackLogo} alt="logo" />
      <img id="nav-img2" src={menuTop} alt="logo" />
        </nav>
    )
}

export default Navbar;