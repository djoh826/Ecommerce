import ProductRender from './ProductRender';

//"All"
function Collections() {
  return (
    <div>
      <h2 style={{ padding: '0 0 0 2%' }}>Shop All</h2>
      <ProductRender tag="apparel" />
      <h2>End</h2>
    </div>
  );
}

export default Collections;
