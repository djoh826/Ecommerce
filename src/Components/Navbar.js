import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import productsData from './items.json';

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
            <p className="cart-empty">Cart is empty.</p>
          ) : (
            <>
              {Array.from(cart.entries()).map(([id, quantity]) => {
                const product = productsData.find(
                  (product) => product.id === id
                );

                if (!product) {
                  return null;
                }

                return (
                  <div className="cart-entry" key={id}>
                    <div className="cart-entry-left">
                      <img
                        className="cart-entry-image"
                        src={`${process.env.PUBLIC_URL}/${product.image}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="cart-entry-right">
                      <div className="name-x-quantity">
                        {product.name} x{quantity}
                      </div>
                      <div className="price">
                        $
                        {(
                          (product.salePrice || product.price) * quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                );
              })}
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
