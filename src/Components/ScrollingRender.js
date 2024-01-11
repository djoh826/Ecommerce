import React from 'react';
import productsData from './items.json';

const ProductRender = () => {
  // Filter products based on tag

  const tag = 'sale';
  var filteredProducts;

  if (tag === '') {
    filteredProducts = productsData;
  } else {
    filteredProducts = productsData.filter(
      (product) => product.tags && product.tags.includes(tag)
    );
  }

  const productCards = filteredProducts.map((product) => (
    <div
      key={product.name}
      className="product-card"
      style={{ border: '1px solid rgb(124, 191, 236)', margin: '5px' }}>
      <img
        src={process.env.PUBLIC_URL + `/${product.image}`}
        alt={product.name}
        className="product-image"
        style={{
          maxWidth: '250px',
          height: 'auto',
          margin: '2px',
        }}
      />
      <div
        className="product-details"
        style={{
          display: 'block',
          textAlign: 'center',
          alignItems: 'center',
        }}>
        <h3 style={{ fontSize: '1.4rem' }}>{product.name}</h3>
        <p className="product-price" style={{}}>
          {product.tags.includes('sale') ? (
            <>
              <span style={{ textDecoration: 'line-through' }}>
                ${product.price}
              </span>
              <span style={{ fontWeight: 'bold' }}> ${product.salePrice}</span>
            </>
          ) : (
            `$${product.price}`
          )}
        </p>
      </div>
    </div>
  ));

  const itemsPerRow = 100;

  const rows = [];
  for (let i = 0; i < productCards.length; i += itemsPerRow) {
    rows.push(
      <div
        key={`row-${i / itemsPerRow}`}
        style={{
          display: 'flex',
          maxWidth: '100%',
          maxHeight: '100%',
        }}>
        {productCards.slice(i, i + itemsPerRow)}
      </div>
    );
  }

  return (
    <div
      className="product-container"
      style={{ maxWidth: '100%', margin: '1%' }}>
      {rows}
    </div>
  );
};

export default ProductRender;
