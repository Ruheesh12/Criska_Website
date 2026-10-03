import React, { useEffect, useRef } from 'react';
import { initSectionReveal } from '../animations/motion';

export const StrategicRoadmap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.roadmap-heading',
      itemsSelector: '.roadmap-step-item',
      stagger: 0.18,
    });
    return () => cleanup();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Strategy and discovery',
      color: '#32838E',
      desc: 'We start with your business goals. We map the current state, audit technical debt, identify constraints, and define a clear, prioritized roadmap for high-yield modernization.',
    },
    {
      number: '02',
      title: 'Build and implement',
      color: '#B9613E',
      desc: 'Our engineers and technical architects execute in rapid agile sprints. You see working software early and often, with automated test pipelines and full transparency throughout.',
    },
    {
      number: '03',
      title: 'Scale and optimize',
      color: '#963C3E',
      desc: 'We harden the solution, train your internal teams, and establish real-time telemetry and operational metrics for continuous improvement. The goal is lasting client capability, not vendor lock-in.',
    },
  ];

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
          className="roadmap-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 84px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Workshop Photo */}
          <div className="roadmap-step-item img-zoom-container" style={{ borderRadius: '24px' }}>
            <img
              src="/assets/strategy.webp"
              alt="Strategic Technology Workshop"
              className="img-zoom-target"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16 / 14',
                objectFit: 'cover',
                borderRadius: '24px',
                display: 'block',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
              }}
              loading="lazy"
            />
          </div>

          {/* Right Column: 3 Steps */}
          <div className="roadmap-copy">
            <div className="section-eyebrow roadmap-step-item" style={{ color: 'var(--color-rust)' }}>
              DELIVERY METHODOLOGY
            </div>

            <div style={{ display: 'grid', gap: '28px' }}>
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="roadmap-step-item"
                  style={{
                    padding: '24px 0 24px 28px',
                    borderLeft: `3px solid ${step.color}`,
                    position: 'relative',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(6px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: '0.08em',
                      }}
                    >
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(22px, 2vw, 28px)',
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--color-muted)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .roadmap-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
