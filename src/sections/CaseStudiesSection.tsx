import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { initSectionReveal } from '../animations/motion';

interface CaseStudiesSectionProps {
  onOpenContact: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.case-heading',
      bodySelector: '.case-body',
      itemsSelector: '.case-card-item',
      stagger: 0.15,
    });
    return () => cleanup();
  }, []);

  const cases = [
    {
      id: 1,
      image: '/assets/case-study-1.jpg',
      tag: 'GLOBAL BANKING • FINTECH',
      quote:
        '“Delivered 99.999% uptime for 14M daily transactions during peak volatility with zero-downtime database cutovers.”',
      author: 'Alexander Wright',
      role: 'VP Engineering, FinGlobal',
      avatar: '/assets/avatar-reviewer.jpg',
      stat: '99.999% Uptime',
    },
    {
      id: 2,
      image: '/assets/case-study-2.jpg',
      tag: 'HEALTHCARE • LIFE SCIENCES',
      quote:
        '“The CRISKA team deeply understood our FDA & HIPAA regulatory constraints and still shipped our AI diagnostic pipeline 2 months early.”',
      author: 'Sarah Chen',
      role: 'VP Engineering, MedLink Diagnostics',
      avatar: '/assets/avatar-reviewer.jpg',
      stat: '42% Faster Triage',
    },
    {
      id: 3,
      image: '/assets/case-study-3.jpg',
      tag: 'RETAIL • CLOUD MODERNIZATION',
      quote:
        '“We cut cloud infrastructure costs by 34% without sacrificing peak Black Friday throughput by moving to containerized autoscaling.”',
      author: 'David Okafor',
      role: 'Head of Platform, RetailCore Systems',
      avatar: '/assets/avatar-reviewer.jpg',
      stat: '34% Cost Reduction',
    },
  ];

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="section section-paper"
      style={{
        backgroundColor: '#F2F2F2',
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="section-eyebrow" style={{ color: 'var(--color-navy)' }}>
            CLIENT IMPACT
          </div>
          <h2
            className="section-title case-heading"
            style={{
              color: 'var(--color-navy)',
              marginBottom: '20px',
            }}
          >
            Selected case<br />studies
          </h2>
          <p
            className="body-text case-body"
            style={{
              color: 'var(--color-muted)',
              margin: '0 auto',
            }}
          >
            A selection of complex business challenges we've solved through strategy, cloud
            engineering, and artificial intelligence.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div
          className="cases-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(24px, 3vw, 36px)',
            marginBottom: '48px',
          }}
        >
          {cases.map((cs) => (
            <article
              key={cs.id}
              className="case-card-item interactive-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
              }}
              onClick={onOpenContact}
            >
              <div>
                {/* Thumbnail */}
                <div
                  className="img-zoom-container"
                  style={{
                    borderRadius: '14px',
                    aspectRatio: '16 / 10',
                    marginBottom: '20px',
                    backgroundColor: '#16181B',
                  }}
                >
                  <img
                    src={cs.image}
                    alt={cs.tag}
                    className="img-zoom-target"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                {/* Tag & Stat */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--color-navy)',
                    }}
                  >
                    {cs.tag}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-blue)',
                      backgroundColor: 'var(--color-blue-light)',
                      padding: '3px 8px',
                      borderRadius: '12px',
                    }}
                  >
                    {cs.stat}
                  </span>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 1.45,
                    color: 'var(--color-ink)',
                    marginBottom: '28px',
                  }}
                >
                  {cs.quote}
                </p>
              </div>

              {/* Author & Footer */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <img
                    src={cs.avatar}
                    alt={cs.author}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #EFEFEF',
                    }}
                  />
                  <div>
                    <strong style={{ fontSize: '14px', display: 'block', color: 'var(--color-ink)' }}>
                      {cs.author}
                    </strong>
                    <span style={{ fontSize: '12px', color: '#666666' }}>{cs.role}</span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-blue)',
                  }}
                >
                  <span>Read case study</span>
                  <ArrowRight size={14} className="btn-icon-slide" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .cases-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
