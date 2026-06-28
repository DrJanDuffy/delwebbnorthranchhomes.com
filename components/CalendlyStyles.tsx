'use client';

import { CALENDLY_WIDGET_CSS } from '@/lib/calendly';

/**
 * Loads Calendly widget CSS in a non-render-blocking way so it doesn't delay FCP/LCP.
 */
export default function CalendlyStyles() {
  return (
    <link
      rel="stylesheet"
      href={CALENDLY_WIDGET_CSS}
      media="print"
      onLoad={(e) => {
        const link = e.currentTarget;
        if (link) link.media = 'all';
      }}
    />
  );
}
