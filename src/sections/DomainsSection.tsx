import React, { useEffect, useRef } from 'react';
import { Landmark, HeartPulse, Factory, ShoppingBag } from 'lucide-react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface DomainsSectionProps {
  onOpenContact: () => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.domain-heading',
      bodySelector: '.domain-body',
      itemsSelector: '.domain-card-item',
      stagger: 0.12,
    });
    return () => cleanup();
  }, []);

  const industries = [
    {
      title: 'Banking & Financial Services',
      desc: 'Next-generation core banking, automated regulatory compliance, fraud intelligence, and ultra-low latency transaction processing.',
      icon: Landmark,
      tag: 'FINTECH',
    },
    {
      title: 'Healthcare & Life Sciences',
      desc: 'HIPAA-compliant data pipelines, clinical decision intelligence, secure patient portals, and automated diagnostic workflows.',
      icon: HeartPulse,
      tag: 'MEDTECH',
    },
    {
      title: 'Industrial & Manufacturing',
      desc: 'IoT telemetry integration, predictive equipment maintenance, digital twin simulation, and smart supply chain synchronization.',
      icon: Factory,
      tag: 'INDUSTRY 4.0',
    },
    {
      title: 'Retail & Consumer Tech',
      desc: 'Omnichannel inventory orchestration, personalized recommender systems, headless commerce, and resilient cart architecture.',
      icon: ShoppingBag,
      tag: 'COMMERCE',
    },
  ];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="section section-dark"
      style={{
        backgroundColor: '#292929',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <div className="section-eyebrow" style={{ color: '#AAAAAA' }}>
            INDUSTRIES & SECTORS
          </div>
          <h2
            className="section-title domain-heading"
            style={{
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Deep expertise where it matters most
          </h2>
          <p
            className="body-text domain-body"
            style={{
              color: '#D4D4D4',
              margin: 0,
            }}
          >
            Industry challenges demand more than generic solutions. We combine sector knowledge,
            strategic thinking, and hardened engineering to address the realities of your business.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="domains-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(20px, 2.5vw, 32px)',
            marginBottom: '56px',
          }}
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="domain-card-item interactive-card-dark"
                style={{
                  backgroundColor: '#1E1E1E',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
                onClick={onOpenContact}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      color: 'var(--color-blue)',
                    }}
                  >
                    <Icon size={26} color="#70A8FF" />
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#AAAAAA',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    {ind.tag}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '14px',
                      lineHeight: 1.3,
                    }}
                  >
                    {ind.title}
                  </h3>

                  <p
                    style={{
                      color: '#CCCCCC',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#70A8FF',
                  }}
                >
                  <span>Explore practice</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button
            variant="dark"
            onClick={onOpenContact}
            withArrow
            style={{ padding: '15px 36px' }}
          >
            Explore All Industry Solutions
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .domains-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .domains-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
