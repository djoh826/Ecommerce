import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function Navbar({ cart }) {
  const [lockNavBar, setLockNavBar] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);

  const toggleCart = () => {
    setDisplayCart(!displayCart);
  };

  const checkScroll = () => {
    if (window.scrollY > 15) {
      setLockNavBar(true);
    } else {
      setLockNavBar(false);
    }
  };

  window.addEventListener('scroll', checkScroll);

  return (
    <>
      <div className={`header ${lockNavBar ? 'locked' : ''}`}>
        <Link to="/">
          <img
            className="links logo"
            height={40}
            src={process.env.PUBLIC_URL + '/images/logoResized.png'}
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
        <button className="cart-icon" onClick={toggleCart}>
          <img
            className="links cart"
            height={40}
            src={process.env.PUBLIC_URL + '/images/cart.png'}
            alt="cart"></img>
        </button>
      </div>
      {displayCart ? (
        <div className="cart-interface">
          {cart.size === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <>
              {Array.from(cart.entries()).map(([key, value]) => (
                <p key={key}>
                  Product ID: {key}, Quantity: {value}
                </p>
              ))}
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
