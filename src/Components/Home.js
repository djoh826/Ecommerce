// import { Link } from 'react-router-dom';
// import Navbar from './Navbar.js';
import './Home.css';
import hero1 from '../Resources/t1.jpg';
import hero2 from '../Resources/t3.jpg';
import hero3 from '../Resources/t4.jpg';

function Home() {
  return (
    //Alert Banner
    //Navbar 1 (logo,,acct,cart)
    //Navbar 2 (sale - apparel - accessories - furniture)

    //Hero - row of 3 things, (the 3 categories, but with captions)
    //flexbox/grid?

    //Feature 1 (FeatureCard.js)
    //Sale stuff (Scrolling bar)
    //Feature 2

    //Footer
    <body style={{ padding: '2% 5% 5% 5%' }}>
      <div className="hero">
        <div className="left-half">
          <img src={hero1} alt="Some pillows on a bedside" />
        </div>
        <div className="right-half">
          <div className="right-top-right">
            <img src={hero2} alt="Two smiling women wearing sweaters" />
          </div>
          <div className="right-bottom-right">
            <img
              src={hero3}
              alt="A stool surrounded by yarn-knit accessories"
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
