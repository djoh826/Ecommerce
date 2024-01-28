import React from 'react';
import ProductCard from './ProductCard';
import productsData from './items.json';

const ScrollingRender = React.memo(({ tag, ignoreId }) => {
  // Memo makes it only rerender when the props are changed
  const filteredProducts = productsData.filter(
    (product) =>
      (tag === '' || (product.tags && product.tags.includes(tag))) &&
      product.id !== ignoreId
  );

  // Fisher-Yates shuffle
  const shuffledProducts = [...filteredProducts];
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }

  return (
    <div
      className="product-container"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowX: 'auto',
        overflowY: 'auto',
        maxWidth: '100%',
        padding: '0.9%',
      }}>
      {shuffledProducts.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
});

export default ScrollingRender;
