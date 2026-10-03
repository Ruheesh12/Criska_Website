import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 1000,
        backgroundColor: '#111315',
        color: '#FFFFFF',
        padding: '14px 20px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        animation: 'slideUpToast 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <style>{`
        @keyframes slideUpToast {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {type === 'success' ? (
        <CheckCircle2 size={18} color="#00C853" />
      ) : (
        <AlertCircle size={18} color="#FF5252" />
      )}
      <span style={{ fontSize: '14px', fontWeight: 500 }}>{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        style={{
          color: '#888888',
          marginLeft: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};
