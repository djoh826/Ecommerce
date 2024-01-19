import './FeatureCard.css';
import { Link } from 'react-router-dom';

function FeatureCard() {
  return (
    <div className="feature-card">
      <div className="feature-left-half">
        <img
          src={process.env.PUBLIC_URL + '/images/f1.jpg'}
          alt="A stylish woman sitting comfortably looking across."></img>
      </div>
      <div className="feature-right-half">
        <div className="right-container">
          <h2>Style meets comfort</h2>
          <p>
            Comfy Market's collection of apparel is hand-made for purpose of
            combining the best of both worlds: comfort and style.
          </p>
          <Link to="/shop/apparel" className="center-container">
            <button>Shop Apparel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
