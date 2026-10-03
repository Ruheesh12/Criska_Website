import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { initSectionReveal } from '../animations/motion';

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.team-heading',
      bodySelector: '.team-body',
      itemsSelector: '.team-card-item',
      stagger: 0.12,
    });
    return () => cleanup();
  }, []);

  const team = [
    {
      name: 'Praneeth Ramaswamy',
      role: 'Founder & Managing Director',
      bio: "Leads CRISKA's vision for technology, talent, and innovation across global markets.",
      image: '/assets/leader-1-alexander.png',
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      bio: 'Leads solution architecture, cloud engineering, and delivery excellence across multi-disciplinary squads.',
      image: '/assets/leader-2-elena.jpg',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Security & Compliance',
      bio: 'Drives our cybersecurity-first approach, Zero-Trust standards, ISO certification, and CMMI maturity.',
      image: '/assets/leader-3-security.jpg',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of People & Talent',
      bio: "Leads technical staffing, global talent acquisition, and CRISKA's engineering-first culture.",
      image: '/assets/leader-4-people.jpg',
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section section-dark"
      style={{
        backgroundColor: '#292929',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 64px' }}>
          <div className="section-eyebrow" style={{ color: '#AAAAAA' }}>
            LEADERSHIP
          </div>
          <h2
            className="section-title team-heading"
            style={{
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Our team
          </h2>
          <p
            className="body-text team-body"
            style={{
              color: '#D4D4D4',
              margin: '0 auto',
            }}
          >
            Experienced leaders and technologists who have built, scaled, and transformed global systems.
          </p>
        </div>

        {/* 4 Team Grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(40px, 6vw, 72px) clamp(30px, 6vw, 100px)',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card-item"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  backgroundColor: '#1E1E1E',
                }}
                className="team-avatar-wrap"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '6px',
                }}
              >
                {member.name}
              </h3>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#70A8FF',
                  marginBottom: '14px',
                }}
              >
                {member.role}
              </div>

              <p
                style={{
                  color: '#CCCCCC',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  maxWidth: '420px',
                  marginBottom: '18px',
                }}
              >
                {member.bio}
              </p>

              {/* Social Icons */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  color: '#888888',
                }}
              >
                <a
                  href="#top"
                  aria-label={`${member.name} LinkedIn`}
                  className="team-social-link"
                  style={{ transition: 'color 0.2s, transform 0.2s' }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#top"
                  aria-label={`${member.name} X`}
                  className="team-social-link"
                  style={{ transition: 'color 0.2s, transform 0.2s' }}
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#top"
                  aria-label={`${member.name} GitHub`}
                  className="team-social-link"
                  style={{ transition: 'color 0.2s, transform 0.2s' }}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-avatar-wrap:hover {
          transform: scale(1.06);
          border-color: var(--color-blue) !important;
        }
        .team-social-link:hover {
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
        @media (max-width: 680px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};
