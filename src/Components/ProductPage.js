import { useState } from 'react';
import './ProductPage.css';

function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(Math.max(quantity + amount, 1));
  };

  const updatedPrice = (product.price * quantity).toFixed(2);
  const updatedSalePrice = (product.salePrice * quantity).toFixed(2);

  return (
    <div key={product.name} className="product-page">
      <div className="flexbox">
        <div className="product-left">
          <img
            src={process.env.PUBLIC_URL + `/${product.image}`}
            alt={product.name}
            className="product-page-image"
          />
        </div>
        <div className="product-right" id="centered">
          <h1>{product.name}</h1>
          <p className="product-page-description">{product.description}</p>
          <p className="quantity-prices">
            Quantity{' '}
            <span className="quantity-buttons">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span className="quantity">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </span>
            <span className="product-page-price">
              {product.tags && product.tags.includes('sale') ? (
                <>
                  <span className="text-with-line-through">
                    ${updatedPrice}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>
                    {' '}
                    ${updatedSalePrice}
                  </span>
                </>
              ) : (
                `$${updatedPrice}`
              )}
            </span>
          </p>
          <div className="buy-buttons ">
            <button>Add to Cart</button>
            <button>Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
