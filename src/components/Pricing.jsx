import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  const handleToggle = () => {
    setAnimatePrice(true);
    setIsYearly(!isYearly);
    // Reset animation state after transition duration
    setTimeout(() => {
      setAnimatePrice(false);
    }, 300);
  };

  const monthlyRates = ["0", "2,399", "11,999"];
  const yearlyRates = ["0", "1,599", "7,999"];

  const currentRates = isYearly ? yearlyRates : monthlyRates;
  const periodText = isYearly ? "/mo, billed annually" : "/month";

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Flexible Pricing</span>
          <h2 className="section-title text-gradient">Plans scaled for every team.</h2>
          <p className="section-description">Start small on our sandbox tier and transition to enterprise scales smoothly when you need higher volumes.</p>
        </div>

        <div className="pricing-switcher">
          <span className={`pricing-label monthly ${!isYearly ? 'active' : ''}`}>Billed Monthly</span>
          <button 
            className={`switch-btn ${isYearly ? 'active' : ''}`} 
            onClick={handleToggle}
            aria-label="Toggle Annual Billing"
          ></button>
          <span className={`pricing-label yearly ${isYearly ? 'active' : ''}`}>
            Billed Annually <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>(Save 30%)</span>
          </span>
        </div>

        <div className="pricing-grid">
          {/* CARD 1 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Sandbox</h3>
              <p className="plan-description">Great for exploring LLM capabilities and webhook pipelines.</p>
            </div>
            <div className="pricing-card-price">
              <span className="price-currency">₹</span>
              <span 
                className="price-amount"
                style={{ 
                  transform: animatePrice ? 'scale(0.85)' : 'scale(1)', 
                  opacity: animatePrice ? 0.5 : 1,
                  transition: 'transform 0.15s ease, opacity 0.15s ease'
                }}
              >
                {currentRates[0]}
              </span>
              <span className="price-period">{periodText}</span>
            </div>
            <ul className="pricing-card-features">
              <li className="pricing-feature-item">
                <Check size={16} />
                1,000 tasks / month
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                3 active pipelines
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Community Slack support
              </li>
              <li className="pricing-feature-item disabled">
                <Check size={16} />
                Subagent orchestrations
              </li>
              <li className="pricing-feature-item disabled">
                <Check size={16} />
                Dedicated endpoints
              </li>
            </ul>
            <a href="#cta" className="btn btn-secondary">Get Started</a>
          </div>

          {/* CARD 2 */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>
            <div className="pricing-card-header">
              <h3 className="plan-name">Pro Team</h3>
              <p className="plan-description">Optimized for growing SaaS systems running active agents.</p>
            </div>
            <div className="pricing-card-price">
              <span className="price-currency">₹</span>
              <span 
                className="price-amount"
                style={{ 
                  transform: animatePrice ? 'scale(0.85)' : 'scale(1)', 
                  opacity: animatePrice ? 0.5 : 1,
                  transition: 'transform 0.15s ease, opacity 0.15s ease'
                }}
              >
                {currentRates[1]}
              </span>
              <span className="price-period">{periodText}</span>
            </div>
            <ul className="pricing-card-features">
              <li className="pricing-feature-item">
                <Check size={16} />
                100,000 tasks / month
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Unlimited active pipelines
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Subagent orchestrations
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                24hr Email support
              </li>
              <li className="pricing-feature-item disabled">
                <Check size={16} />
                Dedicated endpoints
              </li>
            </ul>
            <a href="#cta" className="btn btn-primary">Start Pro Trial</a>
          </div>

          {/* CARD 3 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Scale</h3>
              <p className="plan-description">For heavy workloads, local data centers and critical automation SLA.</p>
            </div>
            <div className="pricing-card-price">
              <span className="price-currency">₹</span>
              <span 
                className="price-amount"
                style={{ 
                  transform: animatePrice ? 'scale(0.85)' : 'scale(1)', 
                  opacity: animatePrice ? 0.5 : 1,
                  transition: 'transform 0.15s ease, opacity 0.15s ease'
                }}
              >
                {currentRates[2]}
              </span>
              <span className="price-period">{periodText}</span>
            </div>
            <ul className="pricing-card-features">
              <li className="pricing-feature-item">
                <Check size={16} />
                1,000,000 tasks / month
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Unlimited active pipelines
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Subagent orchestrations
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Dedicated API endpoints
              </li>
              <li className="pricing-feature-item">
                <Check size={16} />
                Dedicated support engineer
              </li>
            </ul>
            <a href="#cta" className="btn btn-secondary">Contact Scale Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
