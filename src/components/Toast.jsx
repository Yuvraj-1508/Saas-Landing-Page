import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

export default function Toast({ message, isError, isVisible }) {
  return (
    <div 
      className={`toast ${isVisible ? 'show' : ''}`}
      style={{
        borderColor: isError ? 'rgba(239, 68, 68, 0.5)' : 'var(--color-secondary)',
        boxShadow: isError ? '0 0 20px rgba(239, 68, 68, 0.2)' : 'var(--shadow-cyan-glow)'
      }}
    >
      {isError ? (
        <AlertCircle size={20} style={{ color: '#ef4444' }} />
      ) : (
        <Check size={20} className="toast-icon" />
      )}
      <span className="toast-message">{message}</span>
    </div>
  );
}
