import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Strategy & Engineering',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onSuccess(`Thank you ${formData.name || ''}, your project enquiry has been submitted!`);
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'AI Strategy & Engineering',
          message: '',
        });
        onClose();
      }, 1200);
    }, 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(13, 5, 3, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease-out forwards',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div
        style={{
          width: '100%',
          maxWidth: '580px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          animation: 'modalScale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            color: '#666666',
            padding: '8px',
            borderRadius: '50%',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EEEEEE')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <CheckCircle size={56} color="#0056D2" style={{ margin: '0 auto 20px' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', marginBottom: '12px' }}>
              Enquiry Received
            </h3>
            <p style={{ color: '#555555', fontSize: '15px' }}>
              Our senior engineering leadership will review your requirements and respond within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '28px' }}>
              <div className="section-eyebrow" style={{ color: 'var(--color-blue)', marginBottom: '8px' }}>
                START A CONVERSATION
              </div>
              <h2
                id="contact-modal-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--color-ink)',
                }}
              >
                Let's Build What's Next.
              </h2>
              <p style={{ color: '#666666', fontSize: '15px', marginTop: '6px' }}>
                Discuss your technology roadmap, AI enablement, or core modernization.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Global"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Primary Focus Area
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="AI Strategy & Engineering">AI Strategy & Generative AI</option>
                  <option value="Cloud Scale & Infrastructure">Cloud Infrastructure & Kubernetes</option>
                  <option value="Core IT Modernization">Core IT & Legacy Modernization</option>
                  <option value="Cybersecurity & Zero-Trust">Cybersecurity & Trust Architecture</option>
                  <option value="Specialized Engineering Talent">Specialized Technology Talent</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Project Overview & Timeline *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your objectives, architecture challenges, or timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '10px' }}>
                <Button
                  type="submit"
                  variant="primary"
                  withArrow
                  style={{ width: '100%', padding: '16px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Technology Inquiry'}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
