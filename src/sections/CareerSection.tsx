import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface CareerSectionProps {
  onSuccess: (msg: string) => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ onSuccess }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.career-heading',
      bodySelector: '.career-body',
      itemsSelector: '.career-item',
    });
    return () => cleanup();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess("You've been registered for CRISKA talent and career updates!");
      setEmail('');
    }, 800);
  };

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="section section-paper"
      style={{
        backgroundColor: '#F2F2F2',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-eyebrow" style={{ color: 'var(--color-gold)' }}>
            JOIN OUR TEAM
          </div>

          <h2
            className="section-title career-heading"
            style={{
              color: 'var(--color-gold)',
              marginBottom: '18px',
            }}
          >
            Build your career at CRISKA
          </h2>

          <p
            className="body-text career-body"
            style={{
              color: 'var(--color-muted)',
              marginBottom: '36px',
            }}
          >
            We are always looking for people who want to solve hard problems with technology. Join a
            culture where high-velocity engineering meets sovereign creativity.
          </p>

          <form
            onSubmit={handleSubmit}
            className="career-item"
            style={{
              display: 'flex',
              maxWidth: '520px',
              margin: '0 auto 16px',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email for career updates"
              style={{
                flex: '1 1 280px',
                padding: '14px 20px',
                borderRadius: '999px',
                border: '1px solid #CCCCCC',
                backgroundColor: '#FFFFFF',
                fontSize: '15px',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              style={{
                padding: '14px 28px',
                fontSize: '15px',
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Sign up'}
            </Button>
          </form>

          <small
            className="career-item"
            style={{
              display: 'block',
              fontSize: '12px',
              color: '#888888',
            }}
          >
            By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
          </small>
        </div>
      </div>
    </section>
  );
};
