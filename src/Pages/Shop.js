import ProductRender from '../Components/ProductRender';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Shop() {
  const location = useLocation();
  const [tag, setTag] = useState('');

  //Watches for the url changing to update the tag
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const newTag = pathSegments[2] || '';
    setTag(newTag);
  }, [location.pathname]);
  return (
    <div>
      <ProductRender tag={tag} />
    </div>
  );
}

export default Shop;
