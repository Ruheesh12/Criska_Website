import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  titleColor?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  titleColor,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-header-block ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '780px' : '100%',
        margin: isCenter ? '0 auto 56px' : '0 0 44px',
      }}
    >
      {eyebrow && (
        <div className="section-eyebrow">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className="section-title reveal-heading"
        style={{
          color: titleColor || 'inherit',
          marginBottom: subtitle ? '20px' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="body-text reveal-body"
          style={{
            margin: isCenter ? '0 auto' : '0',
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
