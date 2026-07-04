import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowPlayground from './components/WorkflowPlayground';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { Layers, Grid, Globe, Shield, Activity } from 'lucide-react';

export default function App() {
  const [toast, setToast] = useState({
    message: '',
    isError: false,
    isVisible: false
  });

  const triggerToast = (message, isError = false) => {
    setToast({
      message,
      isError,
      isVisible: true
    });
  };

  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, isVisible: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible]);

  return (
    <>
      {/* BACKGROUND DECORATIONS */}
      <div className="glow-orb glow-orb-primary"></div>
      <div className="glow-orb glow-orb-secondary"></div>

      {/* HEADER */}
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <Hero triggerToast={triggerToast} />

        {/* LOGO CLOUD */}
        <div className="logo-cloud">
          <div className="container logo-cloud-inner">
            <h4 className="logo-cloud-title">Empowering teams at modern fast-growing startups</h4>
            <div className="logo-grid">
              <div className="logo-item">
                <Layers size={20} />
                <span>Vertex AI</span>
              </div>
              <div className="logo-item">
                <Grid size={20} />
                <span>Horizon</span>
              </div>
              <div className="logo-item">
                <Globe size={20} />
                <span>Zenith Corp</span>
              </div>
              <div className="logo-item">
                <Shield size={20} />
                <span>Sentinel</span>
              </div>
              <div className="logo-item">
                <Activity size={20} />
                <span>Apex</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID SECTION */}
        <Features />

        {/* INTERACTIVE PLAYGROUND / WORKFLOW BUILDER */}
        <WorkflowPlayground />

        {/* STATS SECTION */}
        <Stats />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* PRICING SECTION */}
        <Pricing />

        {/* FAQ ACCORDION SECTION */}
        <Faq />

        {/* CTA BANNER */}
        <Cta triggerToast={triggerToast} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* GLOBAL TOAST POPUP */}
      <Toast 
        message={toast.message} 
        isError={toast.isError} 
        isVisible={toast.isVisible} 
      />
    </>
  );
}
