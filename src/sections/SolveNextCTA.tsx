import React, { useState, useEffect, useRef } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface SolveNextCTAProps {
  onOpenContact: () => void;
  onSuccess: (msg: string) => void;
}

export const SolveNextCTA: React.FC<SolveNextCTAProps> = ({ onOpenContact, onSuccess }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.solve-heading',
      bodySelector: '.solve-body',
      itemsSelector: '.solve-item',
    });
    return () => cleanup();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Thank you ${formData.name || ''}, your message has been received!`);
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="container">
        {/* Top Split: Copy & Isometric Illustration */}
        <div
          className="solve-top-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 'clamp(40px, 6vw, 84px)',
            alignItems: 'center',
            marginBottom: '64px',
          }}
        >
          {/* Left Column: Heading & CTAs */}
          <div>
            <div className="section-eyebrow solve-item" style={{ color: 'var(--color-blue)' }}>
              GET IN TOUCH
            </div>

            <h2
              className="display-headline solve-heading"
              style={{
                color: 'var(--color-ink)',
                fontSize: 'clamp(36px, 4.5vw, 64px)',
                lineHeight: 1.05,
                marginBottom: '20px',
              }}
            >
              Let's Solve What's<br />Next.
            </h2>

            <p
              className="body-text solve-body"
              style={{
                color: 'var(--color-muted)',
                marginBottom: '32px',
                maxWidth: '540px',
              }}
            >
              Tell us your business challenge. We'll bring the right strategy, senior engineering
              expertise, and production-tested technology to move it forward.
            </p>

            <div className="solve-item" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={onOpenContact} withArrow>
                Start a Conversation
              </Button>
              <Button variant="outline" href="#careers">
                Explore Careers
              </Button>
            </div>
          </div>

          {/* Right Column: Isometric Art */}
          <div
            className="solve-item img-zoom-container"
            style={{
              borderRadius: '24px',
              backgroundColor: '#FFFDF9',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/assets/career-isometric-art.png"
              alt="People and Technology Solving What's Next"
              className="img-zoom-target"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.src = '/assets/career.webp';
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Integrated Quick Contact Form */}
        <div
          id="contact-form"
          className="solve-item"
          style={{
            maxWidth: '880px',
            backgroundColor: '#F8F9FA',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            border: '1px solid #E5E5E5',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--color-ink)',
                marginBottom: '8px',
              }}
            >
              Send an Direct Inquiry
            </h3>
            <p style={{ color: '#666666', fontSize: '15px' }}>
              Have an immediate RFP, architectural query, or technical question? Submit below:
            </p>
          </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Work Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                Project Requirements / Business Challenge *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Outline your scope, expected deliverables, or current infrastructure challenge..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                withArrow
                disabled={isSubmitting}
                style={{ padding: '14px 32px' }}
              >
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .solve-top-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
