import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Layers size={24} className="logo-icon" style={{ stroke: 'var(--color-secondary)' }} />
          Aether Flow
        </a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#playground" class="nav-link" onClick={() => setIsMenuOpen(false)}>Playground</a></li>
          <li><a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          <li><a href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQs</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#pricing" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Sign In</a>
          <a href="#cta" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Join Alpha</a>
        </div>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
