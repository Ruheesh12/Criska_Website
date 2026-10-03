import React from 'react';
import { ArrowUp, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #DDDDDD',
        paddingTop: ' clamp(48px, 6vw, 80px)',
        paddingBottom: '36px',
        color: 'var(--color-ink)',
      }}
    >
      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1.3fr',
            gap: 'clamp(32px, 4vw, 56px)',
            marginBottom: '64px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/assets/criska-logo.png"
                alt="CRISKA"
                style={{ height: '44px', width: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--color-muted)',
                lineHeight: 1.6,
                maxWidth: '280px',
                marginBottom: '24px',
              }}
            >
              Technology, talent, and innovation engineered for enterprise sovereignty and scale.
            </p>
            <div style={{ display: 'flex', gap: '14px', color: '#666666' }}>
              <a href="#top" aria-label="LinkedIn" className="footer-icon-link">
                <Linkedin size={20} />
              </a>
              <a href="#top" aria-label="X (Twitter)" className="footer-icon-link">
                <Twitter size={20} />
              </a>
              <a href="#top" aria-label="GitHub" className="footer-icon-link">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-ink)',
                marginBottom: '20px',
              }}
            >
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
              {[
                'AI & Generative AI',
                'Software Engineering',
                'Cloud & Infrastructure',
                'Data & Intelligence',
                'Cybersecurity',
              ].map((item) => (
                <li key={item}>
                  <a href="#capabilities" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-ink)',
                marginBottom: '20px',
              }}
            >
              Industries
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
              {[
                'Banking & Financial',
                'Healthcare & Life Sciences',
                'Retail & E-Commerce',
                'Manufacturing',
                'Telecommunications',
              ].map((item) => (
                <li key={item}>
                  <a href="#industries" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-ink)',
                marginBottom: '20px',
              }}
            >
              Global Presence
            </h4>
            <div style={{ display: 'grid', gap: '14px', fontSize: '14px', color: 'var(--color-muted)' }}>
              <div>
                <strong style={{ color: 'var(--color-ink)' }}>Criska Business Consulting</strong>{' '}
                operates in <strong style={{ color: 'var(--color-ink)' }}>three major global markets:</strong>{' '}
                India, the United Kingdom (UK), and the United States (US)
              </div>
              <div style={{ marginTop: '6px' }}>
                <a
                  href="mailto:contact@criska.com"
                  style={{ color: 'var(--color-blue)', fontWeight: 600 }}
                >
                  contact@criska.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #EEEEEE',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '13px',
            color: '#777777',
          }}
        >
          <div>© 2026 CRISKA Technologies Inc. All rights reserved.</div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#top" className="footer-legal-link">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#top" className="footer-legal-link">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#top" className="footer-legal-link">
              Security
            </a>
            <span>•</span>
            <a href="#top" className="footer-legal-link">
              Cookie Settings
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-ink)',
              fontWeight: 600,
              fontSize: '13px',
              padding: '6px 12px',
              borderRadius: '20px',
              backgroundColor: '#F2F2F2',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E5E5E5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F2F2F2')}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #555555;
          font-size: 14px;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--color-blue) !important;
          transform: translateX(3px);
        }
        .footer-icon-link {
          transition: color 0.2s, transform 0.2s;
        }
        .footer-icon-link:hover {
          color: var(--color-blue) !important;
          transform: translateY(-2px);
        }
        .footer-legal-link:hover {
          color: var(--color-ink) !important;
        }
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
