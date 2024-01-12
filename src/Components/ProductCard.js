import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card-link">
      <div key={product.name} className="product-card hover-anim">
        <img
          src={process.env.PUBLIC_URL + `/${product.image}`}
          alt={product.name}
          className="product-image"
          style={{
            maxWidth: '250px',
            height: 'auto',
            margin: ' 0 auto 2px ',
          }}
        />
        <div
          className="product-details"
          style={{
            display: 'block',
            textAlign: 'center',
            alignItems: 'center',
          }}>
          <h3 style={{ fontSize: '1.2rem' }}>{product.name}</h3>
          <p className="product-price" style={{}}>
            {product.tags.includes('sale') ? (
              <>
                <span style={{ textDecoration: 'line-through' }}>
                  ${product.price}
                </span>
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  ${product.salePrice}
                </span>
              </>
            ) : (
              `$${product.price}`
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
