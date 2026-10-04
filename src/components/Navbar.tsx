import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'AI Strategy', href: '#ai-strategy' },
    { label: 'Industries', href: '#industries' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Team', href: '#team' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        setMobileMenuOpen(false);
        const navHeight = 76;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className="nav-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: '72px',
        backgroundColor: isScrolled ? 'rgba(235, 237, 240, 0.94)' : 'rgba(221, 221, 221, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.06)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
          aria-label="CRISKA Home"
        >
          <img
            src="/assets/criska-logo.png"
            alt="CRISKA"
            style={{
              height: '32px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
            onError={(e) => {
              // Fallback text if logo image is missing
              e.currentTarget.style.display = 'none';
              const nextEl = e.currentTarget.nextElementSibling;
              if (nextEl) (nextEl as HTMLElement).style.display = 'flex';
            }}
          />
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '22px',
              letterSpacing: '0.15em',
              color: 'var(--color-ink)',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: '3px solid var(--color-ink)',
                borderRightColor: 'var(--color-blue)',
                display: 'inline-block',
              }}
            />
            CRISKA
          </div>
        </a>

        {/* Desktop Links */}
        <nav
          className="desktop-nav"
          aria-label="Primary Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#292929',
                padding: '6px 2px',
                position: 'relative',
              }}
              className="nav-link-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div
          className="desktop-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <Button
            variant="outline"
            onClick={onOpenContact}
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              borderColor: '#999999',
            }}
          >
            Contact
          </Button>
          <Button
            variant="primary"
            onClick={onOpenContact}
            withArrow
            style={{
              padding: '9px 20px',
              fontSize: '13px',
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            padding: '8px',
            color: 'var(--color-ink)',
            display: 'none',
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        createPortal(
          <div
            className="mobile-drawer"
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              bottom: 0,
              minHeight: 'calc(100dvh - 72px)',
              overflowY: 'auto',
              backgroundColor: '#05070B',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 18px 50px rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 1000,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              animation: 'slideDownMobile 0.25s ease-out forwards',
            }}
          >
          <style>{`
            @keyframes slideDownMobile {
              from { opacity: 0; transform: translateY(-12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#F5F7FA',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
            <Button
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              withArrow
              style={{ width: '100%', padding: '14px' }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              style={{ width: '100%', padding: '14px' }}
            >
              Contact Us
            </Button>
          </div>
          </div>,
          document.body
        )
      )}

      {/* Responsive media rules */}
      <style>{`
        .nav-link-hover {
          transition: color 0.2s ease;
        }
        .nav-link-hover:hover {
          color: var(--color-blue) !important;
        }
        @media (max-width: 960px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
