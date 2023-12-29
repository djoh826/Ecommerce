import React from 'react';
import productsData from './items.json';

const ProductRender = ({ tag }) => {
  // Filter products based on the provided tag
  const filteredProducts = productsData.filter(
    (product) => product.tags && product.tags.includes(tag)
  );

  console.log('Filtered Products Length:', filteredProducts.length);

  return (
    <div className="product-container">
      {filteredProducts.map((product) => (
        <div key={product.name} className="product-card">
          <img
            src={process.env.PUBLIC_URL + `/${product.image}`}
            alt={product.name}
            className="product-image"
          />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-price">
              {product.tags.includes('sale') ? (
                <>
                  <span className="discounted-price">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="original-price">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                `$${product.price.toFixed(2)}`
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductRender;
