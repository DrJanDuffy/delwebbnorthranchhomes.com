'use client';

import { useEffect } from 'react';
import { CALENDLY_BADGE, CALENDLY_URL, whenCalendlyReady } from '@/lib/calendly';

/**
 * Calendly badge widget – fixed corner scheduling button from Calendly dashboard.
 */
export default function CalendlyBadge() {
  useEffect(() => {
    return whenCalendlyReady(() => {
      window.Calendly?.initBadgeWidget({
        url: CALENDLY_URL,
        ...CALENDLY_BADGE,
      });
    });
  }, []);

  return null;
}
