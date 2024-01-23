// import Navbar from './Navbar.js';
import ScrollingRender from '../Components/ScrollingRender.js';
import { Hero } from '../Components/Hero.js';
import FeatureCard from '../Components/FeatureCard.js';
import Newsletter from '../Components/Newsletter.js';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    //Alert Banner?

    //Feature 1 (FeatureCard.js)
    //Feature 2

    //Footer
    <main>
      <Hero />

      <div className="container">
        <Newsletter />
        <div class="sale-info">
          <h1>Check out our sale!</h1>
          <div>
            <Link to="/shop/sale">
              <button>Shop our Sale</button>
            </Link>
          </div>
        </div>

        <ScrollingRender tag="sale" />
        <FeatureCard />
      </div>
    </main>
  );
}

export default Home;
