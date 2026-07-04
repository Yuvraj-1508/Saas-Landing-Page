import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const testimonials = [
    {
      quote: "Deploying Aether Flow simplified our infrastructure immensely. We replaced an entire system of Cron scripts and custom queue consumers with three simple pipelines. The AI intent routing matches our manual support classifications with 98% accuracy.",
      name: "Sarah Chen",
      title: "VP of Engineering at Vertex AI",
      color: "var(--color-primary)"
    },
    {
      quote: "The context syncing is magic. We feed it our API docs, internal Wikis, and Slack threads, and the subagents resolve questions on client support queues without developer oversight. Absolutely beautiful UI design as well.",
      name: "Marcus Sterling",
      title: "Co-Founder of Sentinel Labs",
      color: "var(--color-secondary)"
    },
    {
      quote: "Aether Flow’s developer experience is stellar. Integrating code blocks in their TypeScript playground worked on day one. Having visual flows and instant execution log traces has slashed debugging times.",
      name: "Liam Fletcher",
      title: "Lead Architect at Apex",
      color: "var(--color-accent)"
    }
  ];

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handlePrev = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startAutoplay();
  };

  const handleDotClick = (idx) => {
    stopAutoplay();
    setCurrentIndex(idx);
    startAutoplay();
  };

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title text-gradient">Loved by engineering teams.</h2>
          <p className="section-description">See how founders and engineers use Aether Flow to build resilient workflows in minutes.</p>
        </div>

        <div 
          className="testimonials-slider"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-slide">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <svg width="100%" height="100%" viewBox="0 0 44 44" fill="var(--bg-dark)">
                      <circle cx="22" cy="18" r="8" fill={t.color}/>
                      <path d="M6 38c0-8 8-10 16-10s16 2 16 10" fill={t.color}/>
                    </svg>
                  </div>
                  <div className="testimonial-meta">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-title">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-controls">
          <button 
            className="testimonial-btn prev" 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <div 
                key={idx}
                className={`testimonial-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
              ></div>
            ))}
          </div>
          
          <button 
            className="testimonial-btn next" 
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
