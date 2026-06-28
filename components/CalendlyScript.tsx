'use client';

import Script from 'next/script';
import {
  CALENDLY_READY_EVENT,
  CALENDLY_WIDGET_JS,
} from '@/lib/calendly';

/**
 * Loads Calendly widget.js once site-wide (official embed pattern).
 * Inline, popup, and badge widgets share this script.
 */
export default function CalendlyScript() {
  return (
    <Script
      id="calendly-widget-script"
      src={CALENDLY_WIDGET_JS}
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event(CALENDLY_READY_EVENT));
      }}
    />
  );
}
