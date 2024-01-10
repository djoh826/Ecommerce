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
        <img
          className="links logo"
          height={40}
          src={logoImage}
          alt="Logo"></img>
      </Link>
      <Link to="/shop" className="links">
        Shop All
      </Link>
      <Link to="/shop/sale" className="links">
        Sale
      </Link>
      <Link to="/shop/apparel" className="links">
        Apparel
      </Link>
      <Link to="/shop/accessories" className="links">
        Accessories
      </Link>
      <Link to="/shop/furniture" className="links">
        Furniture
      </Link>
      <Link to="/">
        <img
          className="links cart"
          height={40}
          src={cartImage}
          alt="Cart"></img>
      </Link>
    </div>
  );
}

export default Navbar;
