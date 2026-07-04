import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      q: "How does the cognitive context syncing work?",
      a: "Aether Flow connects securely to your platforms (Slack, Notion, Google Drive, databases) and tracks structural events. When an event fires, our platform updates semantic indexes locally, so your agents have immediate access to relevant, up-to-date workspace contexts without query latency."
    },
    {
      q: "Are there tasks limits on the Pro Trial?",
      a: "No. During your 14-day Pro Trial, you can run unlimited pipelines and triggers up to 10,000 tasks to thoroughly benchmark capabilities, sandbox code runs, and evaluate multi-agent performance."
    },
    {
      q: "Is my company context data secure?",
      a: "Absolutely. Security is our absolute priority. Data is encrypted using AES-256 both in transit and at rest. We provide SOC2 compliance records and support self-hosted local execution clusters on request for enterprise scale clients."
    },
    {
      q: "Can I construct custom integrations?",
      a: "Yes. If our 150+ native integrations do not cover your app, you can create custom webhooks or deploy sandboxed node scripts directly to our runtime environment, running arbitrary API calls with custom authorization schemas."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title text-gradient">Frequently Asked Questions</h2>
          <p className="section-description">Here are answers to common questions about context syncing, agents, and custom security settings.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  {faq.q}
                  <ChevronDown className="faq-chevron" size={20} />
                </button>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: isActive ? '200px' : '0px',
                    padding: isActive ? '1.5rem 2rem' : '0 2rem',
                    borderTop: isActive ? '1px solid var(--border-glass)' : '1px solid transparent',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
