import ProductRender from '../Components/ProductRender';
import React, { useEffect } from 'react';

function Shop({ tag }) {
  const ScrollToTopOnLoad = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  ScrollToTopOnLoad(); // Scrolls to top on initial load

  return (
    <div>
      <ProductRender tag={tag} />
    </div>
  );
}

export default Shop;
