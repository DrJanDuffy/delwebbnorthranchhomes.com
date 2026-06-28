'use client';

import { Calendar } from 'lucide-react';
import CalendlyInline from './CalendlyInline';
import { CALENDLY_URL } from '@/lib/calendly';
import { Button } from './ui/button';

type ScheduleTourProps = {
  inline?: boolean;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
};

export default function ScheduleTour({
  inline = false,
  variant = 'accent',
  size = 'lg',
  className = '',
}: ScheduleTourProps) {
  if (inline) {
    return (
      <div className="w-full">
        <CalendlyInline url={CALENDLY_URL} height="700px" className="rounded-lg overflow-hidden" />
      </div>
    );
  }

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }

    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      type="button"
      onClick={handleScheduleClick}
      variant={variant}
      size={size}
      className={`${className} flex items-center gap-2`}
    >
      <Calendar className="w-5 h-5" aria-hidden />
      Schedule time with me
    </Button>
  );
}
