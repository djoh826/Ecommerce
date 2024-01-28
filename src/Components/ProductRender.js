import React from 'react';
import ProductCard from './ProductCard';
import productsData from './items.json';
import './ProductRender.css';

const ProductRender = ({ tag }) => {
  // Filter products based on tag
  const filteredProducts =
    tag === ''
      ? productsData
      : productsData.filter(
          (product) => product.tags && product.tags.includes(tag)
        );

  return (
    <div className="products-rows-render">
      {filteredProducts.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductRender;
