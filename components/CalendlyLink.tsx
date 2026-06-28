'use client';

import { Calendar } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/calendly';

type CalendlyLinkProps = {
  url?: string;
  text?: string;
  className?: string;
  showIcon?: boolean;
};

export default function CalendlyLink({
  url = CALENDLY_URL,
  text = 'Schedule time with me',
  className = '',
  showIcon = true,
}: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold min-h-[44px] ${className}`}
    >
      {showIcon && <Calendar className="w-5 h-5" aria-hidden />}
      {text}
    </a>
  );
}
