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
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 28px 90px rgba(4, 20, 38, 0.46)',
                background: 'radial-gradient(circle at 50% 35%, rgba(94, 225, 255, 0.18), rgba(3, 8, 15, 0.95) 28%, rgba(0, 0, 0, 1) 72%)',
              }}
            >
              <div className="hero-visual-bg" aria-hidden="true">
                <span className="hero-glow hero-glow-one" />
                <span className="hero-glow hero-glow-two" />
                <span className="hero-ring hero-ring-large" />
                <span className="hero-ring hero-ring-small" />
                <span className="hero-orbit hero-orbit-one" />
                <span className="hero-orbit hero-orbit-two" />
                <span className="hero-badge hero-badge-top" />
                <span className="hero-badge hero-badge-middle" />
                <span className="hero-badge hero-badge-bottom" />
                <span className="hero-mini-node node-one" />
                <span className="hero-mini-node node-two" />
                <span className="hero-mini-node node-three" />
                <span className="hero-mini-node node-four" />
              </div>

              <div
                className="hero-portrait-overlay img-zoom-container"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '10%',
                  top: '10%',
                  width: '64%',
                  height: '76%',
                  overflow: 'hidden',
                  borderRadius: 'clamp(16px, 2vw, 22px)',
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.28), 0 0 30px rgba(100, 208, 255, 0.18)',
                  border: '1px solid rgba(180, 236, 255, 0.18)',
                  background: 'rgba(10, 25, 39, 0.25)',
                }}
              >
                <img
                  src="/assets/hero-person-ai.jpe"
                  alt="AI cybersecurity specialist"
                  className="hero-portrait-image img-zoom-target"
                  style={{
                    position: 'absolute',
                    left: '-2%',
                    top: '-3%',
                    width: '108%',
                    height: '114%',
                    maxWidth: 'none',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    filter: 'saturate(1.2) contrast(1.14) brightness(1.08)',
                    opacity: 0.98,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-media-inner {
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.8s ease;
        }

        .hero-media-inner:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 34px 90px rgba(8, 33, 75, 0.34);
        }

        .hero-visual-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 38%, rgba(74, 224, 255, 0.12), transparent 18%),
            radial-gradient(circle at 76% 26%, rgba(59, 162, 255, 0.10), transparent 20%),
            linear-gradient(135deg, rgba(3, 6, 12, 0.96), rgba(4, 10, 18, 0.9) 44%, rgba(0, 0, 0, 0.98));
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(22px);
          animation: floatGlow 8s ease-in-out infinite alternate;
        }

        .hero-glow-one {
          width: 18rem;
          height: 18rem;
          left: 18%;
          top: 14%;
          background: rgba(20, 214, 255, 0.22);
        }

        .hero-glow-two {
          width: 22rem;
          height: 22rem;
          right: 2%;
          bottom: 7%;
          background: rgba(255, 163, 68, 0.18);
          animation-delay: 1.4s;
        }

        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(93, 221, 255, 0.44);
          box-shadow: inset 0 0 18px rgba(90, 220, 255, 0.12), 0 0 20px rgba(0, 201, 255, 0.15);
          animation: rotateRing 18s linear infinite;
        }

        .hero-ring-large {
          width: 84%;
          height: 84%;
          left: 11%;
          top: 8%;
          background: radial-gradient(circle at center, rgba(10, 75, 108, 0.28), rgba(10, 75, 108, 0.06) 54%, transparent 70%);
        }

        .hero-ring-small {
          width: 52%;
          height: 52%;
          left: 26%;
          top: 22%;
          border-width: 2px;
          border-color: rgba(132, 255, 255, 0.38);
          box-shadow: 0 0 24px rgba(81, 199, 255, 0.18), inset 0 0 20px rgba(150, 246, 255, 0.08);
          animation-duration: 12s;
        }

        .hero-orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(96, 206, 255, 0.24);
          transform: rotate(12deg);
        }

        .hero-orbit-one {
          width: 88%;
          height: 88%;
          left: 7%;
          top: 7%;
          background: radial-gradient(circle, transparent 54%, rgba(15, 217, 255, 0.14) 54%, transparent 58%);
        }

        .hero-orbit-two {
          width: 58%;
          height: 58%;
          left: 21%;
          top: 21%;
          border-style: dashed;
          opacity: 0.75;
        }

        .hero-badge {
          position: absolute;
          display: block;
          width: 36px;
          height: 36px;
          border-radius: 12px;
          border: 1px solid rgba(125, 230, 255, 0.55);
          background: rgba(2, 14, 26, 0.4);
          box-shadow: 0 0 16px rgba(201, 245, 255, 0.2);
          transform: rotate(18deg);
        }

        .hero-badge::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(41, 202, 255, 0.75), rgba(17, 123, 255, 0.2));
          box-shadow: inset 0 0 16px rgba(255, 255, 255, 0.2);
        }

        .hero-badge-top {
          top: 10%;
          right: 12%;
        }

        .hero-badge-middle {
          top: 54%;
          right: 6%;
          animation: floatCard 7s ease-in-out infinite;
        }

        .hero-badge-bottom {
          bottom: 11%;
          left: 11%;
          animation: floatCard 8s ease-in-out infinite 0.8s;
        }

        .hero-mini-node {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, #dbf8ff 0%, #53d7ff 24%, #0c53ff 100%);
          box-shadow: 0 0 14px rgba(82, 195, 255, 0.85);
          animation: pulseDot 3s ease-in-out infinite;
        }

        .node-one { top: 20%; left: 18%; }
        .node-two { top: 24%; right: 18%; animation-delay: 0.7s; }
        .node-three { bottom: 20%; left: 28%; animation-delay: 1.3s; }
        .node-four { bottom: 9%; right: 16%; animation-delay: 1.8s; }

        .hero-media-inner::before {
          content: '';
          position: absolute;
          inset: 3% 4% 3% 4%;
          border-radius: 34px;
          border: 1px solid rgba(132, 225, 255, 0.42);
          box-shadow: 0 0 28px rgba(53, 210, 255, 0.18), inset 0 0 24px rgba(80, 200, 255, 0.12);
          pointer-events: none;
        }

        .hero-media-inner::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 52%;
          width: 94%;
          height: 94%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(110, 220, 255, 0.30);
          box-shadow: 0 0 38px rgba(51, 177, 255, 0.22), inset 0 0 40px rgba(46, 182, 255, 0.10);
          animation: rotateRing 16s linear infinite;
          pointer-events: none;
        }

        .hero-portrait-overlay::before {
          content: '';
          position: absolute;
          inset: -8% -9%;
          border-radius: 28px;
          border: 1px solid rgba(128, 232, 255, 0.34);
          box-shadow: 0 0 24px rgba(75, 207, 255, 0.18), inset 0 0 20px rgba(120, 220, 255, 0.08);
          pointer-events: none;
        }

        .hero-portrait-overlay::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 122%;
          height: 122%;
          transform: translate(-50%, -50%) rotate(18deg);
          border-radius: 50%;
          border: 1px solid rgba(191, 245, 255, 0.22);
          box-shadow: inset 0 0 16px rgba(117, 216, 255, 0.10);
          pointer-events: none;
        }

        @keyframes rotateRing {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes floatGlow {
          0% { transform: translate3d(0, 0, 0) scale(0.96); }
          100% { transform: translate3d(10px, -12px, 0) scale(1.08); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0) rotate(18deg); }
          50% { transform: translateY(-12px) rotate(24deg); }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 1; }
        }

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
            border-radius: clamp(20px, 3vw, 32px) !important;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15) !important;
          }
          .hero-portrait-overlay {
            left: 18% !important;
            top: 18% !important;
            width: 50% !important;
            height: 60% !important;
          }
          .hero-portrait-image {
            left: 5% !important;
            top: -7% !important;
            width: 220% !important;
            height: 118% !important;
          }
        }

        @media (max-width: 600px) {
          .hero-portrait-overlay {
            left: 18% !important;
            top: 18% !important;
            width: 52% !important;
            height: 58% !important;
          }
          .hero-portrait-image {
            left: 4% !important;
            top: -6% !important;
            width: 210% !important;
            height: 118% !important;
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
