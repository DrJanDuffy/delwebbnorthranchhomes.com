'use client';

import { Calendar } from 'lucide-react';
import CalendlyInline from './CalendlyInline';
import { CALENDLY_URL, openCalendlyPopup } from '@/lib/calendly';
import { Button } from './ui/button';

type ScheduleTourProps = {
  inline?: boolean;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  text?: string;
};

export default function ScheduleTour({
  inline = false,
  variant = 'accent',
  size = 'lg',
  className = '',
  text = 'Schedule time with me',
}: ScheduleTourProps) {
  if (inline) {
    return (
      <div className="w-full">
        <CalendlyInline url={CALENDLY_URL} height="700px" className="rounded-lg overflow-hidden" />
      </div>
    );
  }

  return (
    <Button
      type="button"
      onClick={() => openCalendlyPopup(CALENDLY_URL)}
      variant={variant}
      size={size}
      className={`${className} flex items-center gap-2`}
    >
      <Calendar className="w-5 h-5" aria-hidden />
      {text}
    </Button>
  );
}
