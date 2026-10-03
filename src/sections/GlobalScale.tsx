import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { initSectionReveal, initCounter } from '../animations/motion';

interface GlobalScaleProps {
  onOpenContact: () => void;
}

export const GlobalScale: React.FC<GlobalScaleProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.scale-heading',
      bodySelector: '.scale-body',
      itemsSelector: '.scale-item',
    });
    return () => cleanup();
  }, []);

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    if (stat1Ref.current) {
      cleanups.push(initCounter(stat1Ref.current, 50, '%'));
    }
    if (stat2Ref.current) {
      cleanups.push(initCounter(stat2Ref.current, 50, '%'));
    }
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-dark"
      style={{
        backgroundColor: '#292929',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          className="scale-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Boardroom Image */}
          <div className="scale-item img-zoom-container" style={{ borderRadius: '24px' }}>
            <img
              src="/assets/global.webp"
              alt="Global Scale and Business Execution"
              className="img-zoom-target"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16 / 13',
                objectFit: 'cover',
                borderRadius: '24px',
                display: 'block',
              }}
              loading="lazy"
            />
          </div>

          {/* Right Column: Copy & Stats */}
          <div className="scale-copy">
            <div className="section-eyebrow scale-item" style={{ color: '#AAAAAA' }}>
              SCALE & IMPACT
            </div>

            <h2
              className="section-title scale-heading"
              style={{
                color: '#FFFFFF',
                marginBottom: '20px',
              }}
            >
              Global Scale.<br />Seamless Execution.
            </h2>

            <p
              className="body-text scale-body"
              style={{
                color: '#D4D4D4',
                marginBottom: '40px',
                maxWidth: '560px',
              }}
            >
              Specialized teams and technology working across time zones to deliver where your business
              needs us, de-risking aggressive technological bets with seasoned execution squads.
            </p>

            {/* Stat Grid with Counter Animations */}
            <div
              className="scale-stats scale-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(20px, 4vw, 40px)',
                marginBottom: '40px',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                paddingTop: '32px',
              }}
            >
              <div className="stat-card">
                <span
                  ref={stat1Ref}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(44px, 4.5vw, 68px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                  }}
                >
                  0%
                </span>
                <span style={{ fontSize: '15px', color: '#B3B3B3', lineHeight: 1.45, display: 'block' }}>
                  Accelerated time to market for critical business initiatives
                </span>
              </div>

              <div className="stat-card">
                <span
                  ref={stat2Ref}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(44px, 4.5vw, 68px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                  }}
                >
                  0%
                </span>
                <span style={{ fontSize: '15px', color: '#B3B3B3', lineHeight: 1.45, display: 'block' }}>
                  Leaner operations without compromising quality or security
                </span>
              </div>
            </div>

            <div className="scale-item">
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                  transition: 'border-color 0.2s, gap 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-blue)';
                  e.currentTarget.style.color = '#70A8FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Learn about our delivery model <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .scale-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
