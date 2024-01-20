import './Newsletter.css';
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handleSignup = (ev) => {
    ev.preventDefault(); // no refresh
    console.log(`Email submitted = ${email}`);
  };

  return (
    <div className="newsletter-container">
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Newsletter;
