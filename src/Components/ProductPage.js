import './ProductPage.css';

function ProductPage({ product }) {
  return (
    <div key={product.name} className="product-page">
      <div className="flexbox">
        <div className="product-left">
          <img
            src={process.env.PUBLIC_URL + `/${product.image}`}
            alt={product.name}
            className="product-page-image"
          />
        </div>
        <div className="product-right" id="centered">
          <h1>{product.name}</h1>
          <p className="product-page-price">{`$${product.price}`}</p>
          <p className="product-page-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
