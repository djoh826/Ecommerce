// import Navbar from './Navbar.js';
import './Home.css';
import ScrollingRender from '../Components/ScrollingRender.js';
import { Hero } from '../Components/Hero.js';

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
    </main>
  );
}

export default Home;
