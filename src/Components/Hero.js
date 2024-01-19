import { Link } from 'react-router-dom';
import './Hero.css';

export function Hero() {
  return (
    <div className="hero">
      <div className="left-half">
        <Link to="/shop/furniture">
          <img
            src={process.env.PUBLIC_URL + '/images/t1.jpg'}
            alt="Some pillows on a bedside"
            className="hover-anim"
          />
        </Link>
        <div className="caption">Modern Furnishing</div>
      </div>
      <div className="right-half">
        <div className="right-top-right">
          <Link to="/shop/apparel">
            <img
              src={process.env.PUBLIC_URL + '/images/t3.jpg'}
              alt="Two smiling women wearing sweaters"
              className="hover-anim"
            />
          </Link>
          <div className="caption">Fashionable Clothing</div>
        </div>
        <div className="right-bottom-right">
          <Link to="/shop/accessories">
            <img
              src={process.env.PUBLIC_URL + '/images/t4.jpg'}
              alt="A stool surrounded by yarn-knit accessories"
              className="hover-anim"
            />
          </Link>
          <div className="caption">Stylish Accessories</div>
        </div>
      </div>
    </div>
  );
}
