import './Newsletter.css';
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isClosed, setIsClosed] = useState(false);

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handleSignup = (ev) => {
    ev.preventDefault(); // no refresh
    console.log(`Email submitted = ${email}`);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    !isClosed && (
      <div className="newsletter-container">
        <button
          className="close-button button-fx" // Button to close
          onClick={handleClose}>
          X
        </button>
        <h1>
          Sign up for our newsletter for updates on new items, deals, and more!
        </h1>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="sign-up button-fx" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  );
}

export default Newsletter;
