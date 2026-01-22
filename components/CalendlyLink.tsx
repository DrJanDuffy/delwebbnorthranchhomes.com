'use client';

import { Calendar } from 'lucide-react';

type CalendlyLinkProps = {
  url?: string;
  text?: string;
  className?: string;
  showIcon?: boolean;
};

export default function CalendlyLink({
  url = 'https://calendly.com/drjanduffy/showing',
  text = 'Schedule time with me',
  className = '',
  showIcon = true,
}: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab if Calendly script hasn't loaded yet
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    return false;
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold ${className}`}
    >
      {showIcon && <Calendar className="w-5 h-5" />}
      {text}
    </a>
  );
}
