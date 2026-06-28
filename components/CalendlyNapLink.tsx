'use client';

import { Calendar } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendly';

type CalendlyNapLinkProps = {
  label?: string;
  className?: string;
};

/** Footer/NAP-style Calendly trigger – replaces mailto email links site-wide. */
export default function CalendlyNapLink({
  label = 'Schedule time with me',
  className = '',
}: CalendlyNapLinkProps) {
  return (
    <button
      type="button"
      onClick={() => openCalendlyPopup()}
      className={`flex items-center gap-2 hover:text-white transition-colors min-h-[44px] text-left ${className}`}
      aria-label={label}
    >
      <Calendar className="h-4 w-4 flex-shrink-0" aria-hidden />
      {label}
    </button>
  );
}
