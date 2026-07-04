import React from 'react';

export default function Stats() {
  return (
    <section className="section">
      <div className="container stats-container">
        <div className="stat-card">
          <div className="stat-number text-gradient-purple-cyan">300k+</div>
          <div className="stat-label">Automations Handled Daily</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-gradient-cyan-pink">&lt; 85ms</div>
          <div className="stat-label">Average API Latency</div>
        </div>
        <div className="stat-card">
          <div className="stat-number text-gradient">24 / 7</div>
          <div className="stat-label">Autonomous Operations</div>
        </div>
      </div>
    </section>
  );
}
