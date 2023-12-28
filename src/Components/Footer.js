import './Footer.css';
import { Link } from 'react-router-dom';
// import logoImage from '../Resources/logoResized.png';

function Footer() {
  return (
    <div className="footer">
      <h3>Comfy Market</h3>

      <p>Your go-to destination for all things cozy and comfortable.</p>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <Link to="/about-us" className="footer-links">
          About Us
        </Link>

        <Link to="/contact-us" className="footer-links">
          Contact Us
        </Link>

        <Link to="/return-policy" className="footer-links">
          Return Policy
        </Link>

        <Link to="/terms-of-service" className="footer-links">
          Terms of Service
        </Link>
      </div>
      <div
        style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#fff',
        }}>
        <p>&copy; 2023 Comfy Market. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
