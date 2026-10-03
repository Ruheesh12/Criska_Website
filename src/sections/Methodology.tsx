import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface MethodologyProps {
  onOpenContact: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.ai-heading',
      bodySelector: '.ai-body',
      itemsSelector: '.ai-item',
    });
    return () => cleanup();
  }, []);

  return (
    <section
      id="ai-strategy"
      ref={sectionRef}
      className="section section-dark"
      style={{
        backgroundColor: '#292929',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          className="ai-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy */}
          <div className="ai-copy">
            <div className="section-eyebrow ai-item" style={{ color: '#AAAAAA' }}>
              AI STRATEGY & IMPACT
            </div>

            <h2
              className="section-title ai-heading"
              style={{
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              From AI Potential to<br />Business Impact.
            </h2>

            <p
              className="body-text ai-body"
              style={{
                color: '#D4D4D4',
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              We turn AI from experimentation into production — helping businesses reduce complexity,
              move faster, and unlock durable bottom-line leverage with secure, scalable pipelines.
            </p>

            <div className="ai-item" style={{ display: 'flex', gap: '14px' }}>
              <Button
                variant="dark"
                onClick={onOpenContact}
                withArrow
                style={{ padding: '14px 28px' }}
              >
                AI Transformation Strategy
              </Button>
            </div>
          </div>

          {/* Right Column: AI strategy visual */}
          <div
            className="ai-visual-wrapper ai-item"
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              overflow: 'visible',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '720px',
                borderRadius: '24px',
                overflow: 'visible',
              }}
            >
              <img
                src="/assets/ai-strategy-impact.png"
                alt="AI strategy and impact across technology, teams, and business"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .ai-visual-wrapper {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};
