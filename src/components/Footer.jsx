import React from 'react';
import { Layers, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <a href="#" className="footer-logo">
              <Layers size={24} style={{ stroke: 'var(--color-secondary)' }} />
              Aether Flow
            </a>
            <p className="footer-desc">Next-generation cognitive pipelines and automation models built for growth.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#playground" className="footer-link">AI Playground</a></li>
              <li><a href="#pricing" className="footer-link">Pricing Plans</a></li>
              <li><a href="#faq" className="footer-link">FAQ Guide</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">System Docs</a></li>
              <li><a href="#" class="footer-link">API Specification</a></li>
              <li><a href="#" className="footer-link">Pipeline Examples</a></li>
              <li><a href="#" className="footer-link">Security Audits</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Blog Hub</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Status Page</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; 2026 Aether Flow Inc. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
