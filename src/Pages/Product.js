import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../Components/items.json';
import ProductPage from '../Components/ProductPage';
import ScrollingRender from '../Components/ScrollingRender.js';

function Product() {
  const location = useLocation();

  //   const staticId = location.pathname.split('/')[2] || '';

  //Watches for the url changing to update the productId
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const newTag = pathSegments[2] || '';
    setProduct(
      productsData.find((product) => product.id === parseInt(newTag, 10))
    );
  }, [location.pathname]);

  const [product, setProduct] = useState('');

  console.log('These are the tags ' + product.tags);

  return (
    <>
      <ProductPage product={product} />

      <div style={{ width: '65%', margin: '3% auto' }}>
        {/* Split so it removes "sale" from "apparel,sale" */}
        <h2>Check out similar items:</h2>
        <ScrollingRender
          tag={('' + product.tags).split(',')[0]}
          ignoreId={product.id}
        />
      </div>
    </>
  );
}

export default Product;
