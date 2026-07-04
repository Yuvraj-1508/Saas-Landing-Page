import React, { useState } from 'react';
import { Hexagon, CheckSquare } from 'lucide-react';

export default function Hero({ triggerToast }) {
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
    <section className="section hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-pulse"></span>
            <span>Aether 1.0 Alpha release now live</span>
          </div>
          <h1 className="hero-title text-gradient">Supercharge your team's context with AI.</h1>
          <p class="hero-description">Aether Flow bridges the gap between raw data and real-time execution. Connect your workspaces, run cognitive automation agents, and orchestrate complex workflows in seconds.</p>
          
          <form className="hero-cta-form cta-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="cta-input" 
              placeholder="Enter your work email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Start Free Trial</button>
          </form>
        </div>

        <div className="hero-visual float-anim">
          {/* Glassmorphic Dashboard Mockup */}
          <div className="hero-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mockup-title">aether-workspace-v1.0</div>
              <div style={{ width: '32px' }}></div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-side-item" style={{ background: 'var(--color-primary)', opacity: 0.4 }}></div>
                <div className="mockup-side-item"></div>
                <div className="mockup-side-item"></div>
                <div className="mockup-side-item"></div>
              </div>
              <div className="mockup-main">
                <div className="mockup-chart-container">
                  <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,80 Q50,40 100,70 T200,30 T300,50 T400,10 L400,100 L0,100 Z" fill="url(#chart-grad)"/>
                    <path className="chart-line" d="M0,80 Q50,40 100,70 T200,30 T300,50 T400,10" fill="none" stroke="var(--color-secondary)" strokeWidth="2.5"/>
                  </svg>
                </div>
                <div className="mockup-grid-2">
                  <div className="mockup-widget">
                    <span className="mockup-widget-title">Task Velocity</span>
                    <span className="mockup-widget-value">+42.8%</span>
                    <span style={{ fontSize: '0.65rem', color: '#27c93f' }}>▲ 8% from last week</span>
                  </div>
                  <div className="mockup-widget">
                    <span className="mockup-widget-title">Active AI Agents</span>
                    <div className="mockup-activities">
                      <div className="mockup-activity-row">
                        <span className="mockup-activity-dot"></span>
                        <span className="mockup-activity-text">Context index sync</span>
                      </div>
                      <div className="mockup-activity-row">
                        <span className="mockup-activity-dot green"></span>
                        <span className="mockup-activity-text">HubSpot Sync running</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Overlays */}
          <div className="floating-overlay-card left glass">
            <div className="floating-overlay-icon">
              <Hexagon size={18} style={{ stroke: 'var(--color-secondary)' }} />
            </div>
            <div className="floating-overlay-info">
              <span className="floating-overlay-title">Cognitive Agent</span>
              <span className="floating-overlay-val">Active / Listening</span>
            </div>
          </div>

          <div className="floating-overlay-card right glass">
            <div className="floating-overlay-icon">
              <CheckSquare size={18} style={{ stroke: 'var(--color-primary)' }} />
            </div>
            <div className="floating-overlay-info">
              <span className="floating-overlay-title">Integrations Connected</span>
              <span className="floating-overlay-val">HubSpot, Slack, AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
