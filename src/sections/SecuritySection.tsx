import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface SecuritySectionProps {
  onOpenContact: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.sec-heading',
      bodySelector: '.sec-body',
      itemsSelector: '.sec-item',
    });
    return () => cleanup();
  }, []);

  const trustBadges = [
    { label: 'Zero-Trust Architecture', icon: Lock },
    { label: 'ISO 27001 & SOC 2 Ready', icon: ShieldCheck },
    { label: 'CMMI Level 5 Aligned', icon: FileCheck },
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
          className="security-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy & Trust Badges */}
          <div className="security-copy">
            <div className="section-eyebrow sec-item" style={{ color: 'var(--color-magenta)' }}>
              SECURITY & COMPLIANCE
            </div>

            <h2
              className="section-title sec-heading"
              style={{
                marginBottom: '24px',
              }}
            >
              <span style={{ color: 'var(--color-magenta)' }}>Built for Enterprise.</span>
              <br />
              <span style={{ color: 'var(--color-ink)' }}>Designed for Trust.</span>
            </h2>

            <p
              className="body-text sec-body"
              style={{
                color: 'var(--color-muted)',
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              Security and compliance are embedded from the start, protecting your critical systems,
              proprietary data, and business continuity across every cloud, hybrid, and on-premises footprint.
            </p>

            {/* Trust Badges */}
            <div
              className="sec-item"
              style={{
                display: 'grid',
                gap: '14px',
                marginBottom: '40px',
              }}
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      backgroundColor: '#F8F9FA',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <Icon size={18} color="var(--color-magenta)" />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="sec-item" style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <Button
                variant="primary"
                onClick={onOpenContact}
                withArrow
                style={{
                  backgroundColor: 'var(--color-magenta)',
                  borderColor: 'var(--color-magenta)',
                }}
              >
                Cybersecurity Architecture
              </Button>
              <Button variant="outline" onClick={onOpenContact}>
                Security Standards
              </Button>
            </div>
          </div>

          {/* Right Column: Cybersecurity Visual */}
          <div
            className="sec-item img-zoom-container"
            style={{
              borderRadius: '24px',
              boxShadow: '0 25px 60px rgba(122, 16, 68, 0.15)',
              border: '1px solid rgba(122, 16, 68, 0.1)',
            }}
          >
            <img
              src="/assets/security.webp"
              alt="Cybersecurity technology and global security network"
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
          .security-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
