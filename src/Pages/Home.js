// import Navbar from './Navbar.js';
import ScrollingRender from '../Components/ScrollingRender.js';
import { Hero } from '../Components/Hero.js';
import FeatureCard from '../Components/FeatureCard.js';
import Newsletter from '../Components/Newsletter.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    //Alert Banner?

    //Feature 1 (FeatureCard.js)
    //Feature 2

    //Footer
    <main style={{ padding: '1% 5% 5% 5%' }}>
      <Hero />

      <div
        className="container"
        style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Newsletter />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h1
            style={{
              textAlign: 'left',
              margin: '1% 0 ',
              color: 'rgb(47, 47, 47)',
              fontSize: '2rem',
            }}>
            Check out our sale!
          </h1>
          <div style={{ marginLeft: 'auto', marginRight: '2.5%' }}>
            <Link to="/shop/sale">
              <button
                style={{
                  height: '100%',
                  fontSize: '1.9rem',
                  backgroundColor: 'rgb(124, 191, 236)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '5px',
                  whiteSpace: 'nowrap',
                  padding: '1% 5%',
                  cursor: 'pointer',
                }}>
                Shop our Sale
              </button>
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
