import ProductRender from '../Components/ProductRender';

function Shop({ tag }) {
  return (
    <div>
      <ProductRender tag={tag} />
    </div>
  );
}

export default Shop;
