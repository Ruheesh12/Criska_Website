import React, { useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { runHeroEntrance, initParallax } from '../animations/motion';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const cleanup = runHeroEntrance(heroRef.current);
    return () => {
      if (cleanup) cleanup.revert();
    };
  }, []);

  useEffect(() => {
    if (!mediaRef.current) return;
    const cleanup = initParallax(mediaRef.current, 8);
    return () => cleanup();
  }, []);

  const headlineLines = [
    'Technology.',
    'Talent.',
    'Innovation.',
    'Built for',
    "What's Next.",
  ];

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: 'clamp(48px, 6vw, 90px)',
        paddingBottom: 'clamp(56px, 7vw, 110px)',
      }}
    >
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 'clamp(36px, 5vw, 72px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy */}
          <div className="hero-copy-column">
            <h1
              className="display-headline"
              style={{
                marginBottom: '28px',
              }}
            >
              {headlineLines.map((line, idx) => (
                <span
                  key={idx}
                  className="reveal-text-line"
                  style={{
                    display: 'block',
                    overflow: 'hidden',
                    paddingBottom: '0.18em',
                    marginBottom: '-0.18em',
                  }}
                >
                  <span
                    className="hero-headline-line"
                    style={{
                      display: 'inline-block',
                      color: 'var(--color-wine)',
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="body-text hero-subtitle"
              style={{
                maxWidth: '620px',
                color: '#292929',
                fontSize: 'clamp(16px, 1.25vw, 19px)',
                lineHeight: 1.6,
                marginBottom: '36px',
              }}
            >
              <strong>CRISKA</strong> is a global technology consulting and transformation partner
              helping businesses solve complex challenges, modernize operations, and accelerate growth
              through AI, software, cloud, data, and cybersecurity.
            </p>

            <div
              className="hero-actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <Button
                variant="primary"
                href="#capabilities"
                withArrow
                className="hero-cta-btn"
                style={{
                  padding: '15px 32px',
                  fontSize: '16px',
                }}
              >
                Explore capabilities
              </Button>
              <Button
                variant="outline"
                onClick={onOpenContact}
                className="hero-cta-btn"
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  borderColor: '#333333',
                }}
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div
            className="hero-media-column"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              ref={mediaRef}
              className="hero-media-inner img-zoom-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '640px',
                aspectRatio: '474 / 604',
                borderRadius: '0',
                overflow: 'visible',
                boxShadow: 'none',
                backgroundColor: '#071626',
              }}
            >
              <div
                className="hero-media-frame"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 'inherit',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#071626',
                }}
              >
                <img
                  src="/assets/hero.webp"
                  alt="Technology, Talent, and Innovation at CRISKA"
                  className="img-zoom-target"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  fetchPriority="high"
                  loading="eager"
                />
              </div>

              <div
                className="hero-portrait-overlay img-zoom-container"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-13%',
                  top: '20.5%',
                  width: '50.5%',
                  height: '60%',
                  overflow: 'hidden',
                  borderRadius: 'clamp(14px, 2vw, 22px)',
                  boxShadow: '0 18px 35px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src="/assets/hero.webp"
                  alt=""
                  className="hero-portrait-image img-zoom-target"
                  style={{
                    position: 'absolute',
                    left: '26%',
                    top: '-20%',
                    width: '263%',
                    height: '167%',
                    maxWidth: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-media-column {
            order: 2;
          }
          .hero-media-inner {
            max-width: 100% !important;
            aspectRatio: 16 / 11 !important;
          }
          .hero-portrait-overlay {
            left: 4% !important;
            top: 14% !important;
            width: 42% !important;
            height: 64% !important;
          }
          .hero-media-inner {
            border-radius: clamp(20px, 3vw, 32px) !important;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15) !important;
          }
          .hero-portrait-image {
            left: -9% !important;
            top: -18% !important;
            width: 238% !important;
            height: 156% !important;
          }
        }

        @media (max-width: 600px) {
          .hero-portrait-overlay {
            left: 3% !important;
            top: 14% !important;
            width: 43% !important;
            height: 64% !important;
          }
          .hero-portrait-image {
            left: -7% !important;
            top: -18% !important;
            width: 233% !important;
            height: 156% !important;
          }
        }

        .hero-section .container {
          padding-left: clamp(24px, 5.5vw, 60px);
          padding-right: clamp(24px, 5.5vw, 60px);
        }

        .hero-section .display-headline {
          font-size: clamp(40px, 5.5vw, 84px);
        }

        @media (max-width: 600px) {
        .hero-section .display-headline {
          font-size: clamp(36px, 11vw, 56px);
          line-height: 1;
        }
        }

        @media (min-width: 961px) {
          .hero-media-column {
            transform: translateX(clamp(0px, 3vw, 34px));
          }
        }
      `}</style>
    </section>
  );
};
