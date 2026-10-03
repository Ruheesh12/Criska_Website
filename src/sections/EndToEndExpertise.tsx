import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface EndToEndExpertiseProps {
  onOpenContact: () => void;
}

export const EndToEndExpertise: React.FC<EndToEndExpertiseProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.cap-heading',
      bodySelector: '.cap-body',
      itemsSelector: '.cap-card-item',
      stagger: 0.15,
    });
    return () => cleanup();
  }, []);

  const capabilities = [
    {
      icon: '/assets/icon-cap-1.png',
      title: 'Accelerate generative AI solutions to real business impact',
      description:
        'Identify high-value enterprise AI opportunities, fine-tune domain-specific models, and establish guardrails for reliable autonomous workflows.',
      tag: 'AI & Data',
    },
    {
      icon: '/assets/icon-cap-2.png',
      title: 'Modernize core IT infrastructure for high throughput',
      description:
        'Refactor monolithic legacy platforms into high-performance cloud-native microservices engineered for zero-downtime scalability.',
      tag: 'Engineering',
    },
    {
      icon: '/assets/icon-cloud.png',
      title: 'Cloud scale and cognitive ecosystem foundation',
      description:
        'Design fault-tolerant multi-cloud data mesh, hybrid cloud automation, and regulatory-hardened deployment pipelines.',
      tag: 'Cloud & DevOps',
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="section section-paper"
      style={{
        backgroundColor: '#F2F2F2',
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div
          className="cap-header-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 'clamp(28px, 5vw, 60px)',
            alignItems: 'flex-end',
            marginBottom: '64px',
          }}
        >
          <div>
            <div className="section-eyebrow" style={{ color: 'var(--color-green)' }}>
              CAPABILITIES
            </div>
            <h2
              className="section-title cap-heading"
              style={{
                color: 'var(--color-green)',
                margin: 0,
              }}
            >
              One Partner. End-to-End<br />Technology Expertise.
            </h2>
          </div>
          <div>
            <p
              className="body-text cap-body"
              style={{
                fontSize: '17px',
                color: 'var(--color-muted)',
                margin: 0,
              }}
            >
              AI, cloud, cybersecurity, data, and managed IT — specialized capabilities brought together
              to solve your most critical business challenges and accelerate execution velocity.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div
          className="cap-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(24px, 3vw, 36px)',
            marginBottom: '56px',
          }}
        >
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="cap-card-item interactive-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
              }}
              onClick={onOpenContact}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '28px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      backgroundColor: '#F8F9FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <img
                      src={cap.icon}
                      alt=""
                      style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-blue)',
                      backgroundColor: 'var(--color-blue-light)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                    }}
                  >
                    {cap.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(20px, 1.8vw, 26px)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: 'var(--color-ink)',
                    marginBottom: '16px',
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    color: 'var(--color-muted)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {cap.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '32px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--color-blue)',
                }}
              >
                <span>Learn more</span>
                <span className="btn-icon-slide">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <Button variant="primary" onClick={onOpenContact} withArrow>
            Explore All Capabilities
          </Button>
          <Button variant="outline" href="#cases">
            View Case Studies
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .cap-header-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .cap-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
