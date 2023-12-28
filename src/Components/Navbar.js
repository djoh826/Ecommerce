import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../Resources/logoResized.png';
import cartImage from '../Resources/cart.png';
import { useState } from 'react';

function Navbar() {
  const [lockNavBar, setLockNavBar] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 15) {
      setLockNavBar(true);
    } else {
      setLockNavBar(false);
    }
  };

  window.addEventListener('scroll', checkScroll);

  return (
    <div className={`header ${lockNavBar ? 'locked' : ''}`}>
      <Link to="/">
        <img className="links" height={40} src={logoImage} alt="Logo"></img>
      </Link>
      <Link to="/sale" className="links">
        Sale
      </Link>
      <Link to="/apparel" className="links">
        Apparel
      </Link>
      <Link to="/accessories" className="links">
        Accessories
      </Link>
      <Link to="/furniture" className="links">
        Furniture
      </Link>
      <Link to="/">
        <img className="links" height={40} src={cartImage} alt="Cart"></img>
      </Link>
    </div>
  );
}

export default Navbar;
