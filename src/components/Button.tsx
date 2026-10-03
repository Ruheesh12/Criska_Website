import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'dark-outline' | 'ghost';
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  const variantClass = `btn-${variant}`;
  const combinedClass = `btn ${variantClass} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={16} className="btn-icon-slide" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
