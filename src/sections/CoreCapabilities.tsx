import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface CoreCapabilitiesProps {
  onOpenContact: () => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.core-heading',
      bodySelector: '.core-body',
      itemsSelector: '.core-pillar-item',
    });
    return () => cleanup();
  }, []);

  const pillars = [
    {
      title: 'Technology',
      desc: 'Software engineering, cloud, data, and cybersecurity built for modern business demands.',
      icon: '/assets/icon-ai-strategy.png',
    },
    {
      title: 'Talent',
      desc: 'Specialized technology professionals who integrate with your teams and deliver from day one.',
      icon: '/assets/icon-cloud.png',
    },
    {
      title: 'Innovation',
      desc: 'We build modern systems, bring specialized people, and apply AI where it creates real leverage.',
      icon: '/assets/icon-innovation.png',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          className="pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: 3 Pillars */}
          <div className="pillars-list">
            <div className="section-eyebrow core-pillar-item" style={{ color: 'var(--color-blue)' }}>
              OUR PILLARS
            </div>

            <h2
              className="section-title core-heading"
              style={{
                color: 'var(--color-ink)',
                marginBottom: '40px',
              }}
            >
              Engineered for Modern Enterprise Velocity.
            </h2>

            <div style={{ display: 'grid', gap: '32px', marginBottom: '40px' }}>
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="core-pillar-item"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '54px 1fr',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '16px',
                    transition: 'background-color 0.25s, transform 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(242, 242, 242, 0.6)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#F2F2F2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                    }}
                  >
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--color-ink)',
                        marginBottom: '6px',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-muted)',
                        fontSize: '16px',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="core-pillar-item"
              style={{ display: 'flex', gap: '14px', alignItems: 'center' }}
            >
              <Button variant="outline" onClick={onOpenContact}>
                About CRISKA
              </Button>
              <Button variant="ghost" href="#capabilities" withArrow>
                Explore Capabilities
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div
            className="core-pillar-item img-zoom-container"
            style={{
              borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src="/assets/innovation.webp"
              alt="Technology Innovation and Holographic Command Center"
              className="img-zoom-target"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                borderRadius: '24px',
                display: 'block',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
