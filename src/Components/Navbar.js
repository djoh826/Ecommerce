import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import productsData from './items.json';

function Navbar({ cart }) {
  const [lockNavBar, setLockNavBar] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [, refreshCart] = useState(); // lazy fix

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

  const handleQuantityChange = (id, delta) => {
    console.log(`Id = ${id} , quantity = ${cart.get(id)}`);

    const newQuantity = cart.get(id) + delta;

    if (newQuantity <= 0) {
      // If quantity is 0 or negative, delete the item
      cart.delete(id);
    } else {
      // Otherwise, update the quantity
      cart.set(id, newQuantity);
    }

    refreshCart({}); // lazy fix
    console.log(`NEW Id = ${id} , quantity = ${cart.get(id)}`);
  };

  function calculateSubtotal() {
    return [...cart]
      .reduce((sum, [id, quantity]) => {
        const product = productsData.find((product) => product.id === id);
        return sum + (product.salePrice || product.price) * quantity;
      }, 0)
      .toFixed(2);
  }

  function taxTotal() {
    return (
      <>
        <div>Subtotal: ${calculateSubtotal()}</div>
        <div>Tax: ${(calculateSubtotal() * 0.0825).toFixed(2)}</div>
        <div>
          Shipping: {calculateSubtotal() > 75 ? <>Free!</> : <>$15.00</>}
        </div>
        <div>
          Total: $
          {calculateSubtotal() === 0 ? (
            <>0.00</>
          ) : (
            (
              parseFloat((calculateSubtotal() * 0.0825).toFixed(2)) +
              parseFloat(calculateSubtotal()) +
              parseFloat(calculateSubtotal() > 75 ? 0 : 15.0)
            ).toFixed(2)
          )}
        </div>
      </>
    );
  }

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
          <div className="cart-entries">
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
                      <button
                        className="close-cart-entry" // Button to close
                        onClick={() => handleQuantityChange(product.id, -999)}>
                        X
                      </button>
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
                        <div className="cart-entry-quantity-buttons">
                          <button
                            onClick={() =>
                              handleQuantityChange(product.id, -1)
                            }>
                            -
                          </button>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <div className="cart-buttons">
            {taxTotal()}
            <div className="space-around">
              <span>
                <label style={{ fontSize: '1.3rem' }}>Promo Code: </label>
                <input type="text"></input>
              </span>
              <span>
                <button>Checkout</button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></> //Don't render cart
      )}
    </>
  );
}

export default Navbar;
