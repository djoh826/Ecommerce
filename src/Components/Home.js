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
    <body style={{ padding: '2% 5% 5% 5%' }}>
      <div className="hero">
        <div className="left-half">
          <Link to="/furniture">
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
            <Link to="/apparel">
              <img
                src={hero2}
                alt="Two smiling women wearing sweaters"
                className="hover-anim"
              />
            </Link>
            <div className="caption">Fashionable Clothing</div>
          </div>
          <div className="right-bottom-right">
            <Link to="/accessories">
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

      <h1 style={{ margin: '2.5% 0 1% 0' }}>Check out our sale!</h1>
      <div
        className="sale-section"
        style={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          display: 'flex',
          padding: '0 0 0 25%', //"Magic number" fix
        }}>
        <ScrollingRender />
      </div>
    </body>
  );
}

export default Home;
