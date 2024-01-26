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

  return (
    <div
      className="product-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1048px',
        maxHeight: '100%',
        position: 'relative',
        flexWrap: 'wrap',
        margin: '1% auto',
      }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductRender;
