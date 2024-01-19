// import Navbar from './Navbar.js';
import ScrollingRender from '../Components/ScrollingRender.js';
import { Hero } from '../Components/Hero.js';
import FeatureCard from '../Components/FeatureCard.js';

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
        <FeatureCard />
        <h1
          style={{
            textAlign: 'left',
            margin: '2.5% 0 1% ',
            color: 'rgb(124, 191, 236)',
          }}>
          Check out our sale!
        </h1>
        <ScrollingRender tag="sale" />
      </div>
    </main>
  );
}

export default Home;
