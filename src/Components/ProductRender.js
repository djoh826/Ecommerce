import React from 'react';
import ProductCard from './ProductCard';
import productsData from './items.json';

const ProductRender = ({ tag }) => {
  // Filter products based on tag
  const filteredProducts =
    tag === ''
      ? productsData
      : productsData.filter(
          (product) => product.tags && product.tags.includes(tag)
        );

  const itemsPerRow = 4;

  const rows = [];

  for (let i = 0; i < filteredProducts.length; i += itemsPerRow) {
    const rowProducts = filteredProducts.slice(i, i + itemsPerRow);

    rows.push(
      <div
        key={`row-${i / itemsPerRow}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
          maxHeight: '100%',
          position: 'relative',
        }}>
        {rowProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="product-container"
      style={{ maxWidth: '100%', margin: '1% 10%' }}>
      {rows}
    </div>
  );
};

export default ProductRender;
