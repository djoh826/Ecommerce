import { Link } from 'react-router-dom';
// import Navbar from './Navbar.js';
import './Home.css';
import hero1 from '../Resources/t1.jpg';
import hero2 from '../Resources/t3.jpg';
import hero3 from '../Resources/t4.jpg';
import ScrollingRender from './ScrollingRender.js';

function Home() {
  return (
    //Alert Banner?

    //Feature 1 (FeatureCard.js)
    //Feature 2

    //Footer
    <body style={{ padding: '1% 5% 5% 5%' }}>
      <div className="hero">
        <div className="left-half">
          <Link to="/shop/furniture">
            <img
              src={hero1}
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
                src={hero2}
                alt="Two smiling women wearing sweaters"
                className="hover-anim"
              />
            </Link>
            <div className="caption">Fashionable Clothing</div>
          </div>
          <div className="right-bottom-right">
            <Link to="/shop/accessories">
              <img
                src={hero3}
                alt="A stool surrounded by yarn-knit accessories"
                className="hover-anim"
              />
            </Link>
            <div className="caption">Stylish Accessories</div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1
          style={{
            textAlign: 'left',
            margin: '2.5% auto 1% ',
          }}>
          Check out our sale!
        </h1>
        <div className="saleslider">
          <ScrollingRender />
        </div>
      </div>
    </body>
  );
}

export default Home;
