import React from 'react';
import { Database, Zap, Code, Lock, Users, BarChart3 } from 'lucide-react';

export default function Features() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const featureList = [
    {
      icon: <Database size={24} />,
      title: "Cognitive Context Sync",
      desc: "Automatically indexes files, databases, and message boards using semantic search embeddings. Agents stay fully informed of updates."
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Event Routing",
      desc: "Low-latency webhooks trigger instantaneous logical routing based on intent, sentiment, or priority metrics parsed dynamically."
    },
    {
      icon: <Code size={24} />,
      title: "Developer APIs & SDKs",
      desc: "Expose workflow schemas directly via GraphQL or REST endpoints. Run code blocks inside our sandboxed, distributed environment."
    },
    {
      icon: <Lock size={24} />,
      title: "Granular Security Controls",
      desc: "AES-256 local database encryption. Lock down API triggers with role-based policies and custom client tokens."
    },
    {
      icon: <Users size={24} />,
      title: "Multi-Agent Collaboration",
      desc: "Deploy subagents that interact with each other to complete goals, sharing context files dynamically on a shared thread."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "System-wide Analytics",
      desc: "Track tokens spent, response latencies, run counts, and pipeline failure rates in real-time on premium graph dashboards."
    }
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Powerful Features</span>
          <h2 className="section-title text-gradient">Engineered for autonomous cognitive operations.</h2>
          <p className="section-description">Stop managing individual integration tasks manually. Our platform abstracts execution so you can write workflows in simple logic.</p>
        </div>

        <div className="features-grid">
          {featureList.map((feat, idx) => (
            <div 
              key={idx} 
              className="feature-card"
              onMouseMove={handleMouseMove}
            >
              <div className="feature-card-content">
                <div className="feature-icon-wrapper">
                  {feat.icon}
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
