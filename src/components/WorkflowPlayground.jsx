import React, { useState, useEffect } from 'react';
import { Flag, Cpu, CheckCircle2, Play } from 'lucide-react';

export default function WorkflowPlayground() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [logMessage, setLogMessage] = useState("Ready for execution. Click Run to begin...");

  const nodeLogs = [
    "Webhook Triggered: Catching input payload from production server...",
    "AI Inference: Structuring raw feedback and predicting core topic vectors...",
    "Action Dispatcher: Delivering Slack notification and posting to HubSpot CRM API..."
  ];

  // Auto-run once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      handleRunAutomation();
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleRunAutomation = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogMessage("Workflow initialised...");
    setActiveIndex(-1);

    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setActiveIndex(i);
      setLogMessage(nodeLogs[i]);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRunning(false);
    setLogMessage("Workflow completed successfully in 3.4 seconds.");
  };

  const handleNodeClick = (index) => {
    if (isRunning) return;
    setActiveIndex(index);
    setLogMessage(nodeLogs[index]);
  };

  // Visual helper for progress bar height
  const getProgressHeight = () => {
    if (activeIndex <= 0) return '0%';
    if (activeIndex === 1) return '50%';
    return '100%';
  };

  return (
    <section className="section" id="playground">
      <div className="glow-orb glow-orb-accent"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Preview</span>
          <h2 className="section-title text-gradient-purple-cyan">Construct pipelines in real time.</h2>
          <p className="section-description">Test out Aether Flow’s execution visualizer below. Trigger the automated workflow demo to see dynamic agent context resolution.</p>
        </div>

        <div className="playground-container">
          <div className="playground-info">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Pipeline Core</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Watch how events propagate through nodes. Clicking <strong>Run Automation</strong> starts a simulated payload execution. It fetches a raw webhook object, runs visual intent classification via AI, routes information to Slack, and saves parameters in your CRM.
            </p>
            
            <button 
              id="run-workflow-btn" 
              className={`btn ${isRunning ? 'btn-secondary' : 'btn-glow-cyan'}`}
              onClick={handleRunAutomation}
              disabled={isRunning}
            >
              <Play size={18} fill={isRunning ? 'none' : 'currentColor'} />
              {isRunning ? "Running Automation..." : "Run Automation"}
            </button>
          </div>

          <div className="playground-interactive-box">
            <div className="workflow-canvas">
              <div className="canvas-line-connector">
                <div className="canvas-line-progress" style={{ height: getProgressHeight() }}></div>
              </div>

              {/* NODE 1 */}
              <div 
                className={`workflow-node ${activeIndex >= 0 ? 'active' : ''}`}
                onClick={() => handleNodeClick(0)}
              >
                <div className="node-icon">
                  <Flag size={16} />
                </div>
                <div className="node-details">
                  <span className="node-title">Webhook Trigger</span>
                  <span className="node-subtitle">Listen on /v1/incoming-feed</span>
                </div>
                <span className="node-status">{activeIndex >= 0 ? "Active" : "Listening"}</span>
              </div>

              {/* NODE 2 */}
              <div 
                className={`workflow-node ${activeIndex >= 1 ? 'active' : ''}`}
                onClick={() => handleNodeClick(1)}
              >
                <div className="node-icon">
                  <Cpu size={16} />
                </div>
                <div className="node-details">
                  <span className="node-title">AI Intent Analysis</span>
                  <span className="node-subtitle">Model: Aether-LLM (Medium)</span>
                </div>
                <span className="node-status">{activeIndex >= 1 ? "Active" : "Standby"}</span>
              </div>

              {/* NODE 3 */}
              <div 
                className={`workflow-node ${activeIndex >= 2 ? 'active' : ''}`}
                onClick={() => handleNodeClick(2)}
              >
                <div className="node-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div className="node-details">
                  <span className="node-title">Action Dispatcher</span>
                  <span className="node-subtitle">Post to HubSpot & Slack</span>
                </div>
                <span className="node-status">{activeIndex >= 2 ? "Active" : "Standby"}</span>
              </div>
            </div>

            <div className="workflow-controls">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Real-time logs:</span>
              <div className="workflow-log">{logMessage}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
