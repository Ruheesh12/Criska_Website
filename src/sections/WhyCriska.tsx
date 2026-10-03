import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface WhyCriskaProps {
  onOpenContact: () => void;
}

export const WhyCriska: React.FC<WhyCriskaProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.why-heading',
      bodySelector: '.why-body',
      itemsSelector: '.why-item',
    });
    return () => cleanup();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            gap: 'clamp(40px, 6vw, 84px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Leadership Photo */}
          <div className="why-item img-zoom-container" style={{ borderRadius: '24px' }}>
            <img
              src="/assets/why.webp"
              alt="Strategic Technology Leadership"
              className="img-zoom-target"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16 / 15',
                objectFit: 'cover',
                borderRadius: '24px',
                display: 'block',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
              }}
              loading="lazy"
            />
          </div>

          {/* Right Column: Copy with 3 distinct colored lines */}
          <div className="why-copy">
            <div className="section-eyebrow why-item" style={{ color: 'var(--color-rust)' }}>
              OUR VALUE PROPOSITION
            </div>

            <h2
              className="section-title why-heading"
              style={{
                marginBottom: '28px',
                lineHeight: 1.08,
              }}
            >
              <span style={{ display: 'block', color: 'var(--color-rust)' }}>
                Strategy Leads.
              </span>
              <span style={{ display: 'block', color: 'var(--color-navy)' }}>
                Technology Delivers.
              </span>
              <span style={{ display: 'block', color: 'var(--color-ink)' }}>
                AI Accelerates.
              </span>
            </h2>

            <p
              className="body-text why-body"
              style={{
                color: 'var(--color-muted)',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              We start with what matters to your business. Then we align elite people, hardened cloud
              architecture, and sovereign AI models to create systems that deliver measurable revenue growth
              and compounding competitive advantage.
            </p>

            <div className="why-item" style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <Button variant="primary" onClick={onOpenContact} withArrow>
                Why CRISKA
              </Button>
              <Button variant="outline" href="#cases">
                Client Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
