import React, { useState } from 'react';

export default function Cta({ triggerToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      triggerToast("Success! Welcome to Aether Flow alpha list.", false);
      setEmail('');
    } else {
      triggerToast("Please enter a valid email address.", true);
    }
  };

  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-content">
            <h2 className="cta-title text-gradient">Be the first to build with Aether.</h2>
            <p className="cta-desc">Get access to our developer alpha and start orchestrating cognitive pipelines in under five minutes.</p>
            <form className="cta-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="cta-input" 
                placeholder="Enter your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-glow-cyan">Get Alpha Access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
