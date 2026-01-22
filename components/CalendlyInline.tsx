'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type CalendlyInlineProps = {
  url: string;
  height?: string;
  className?: string;
};

export default function CalendlyInline({ 
  url = 'https://calendly.com/drjanduffy/showing',
  height = '700px',
  className = ''
}: CalendlyInlineProps) {
  useEffect(() => {
    // Calendly widget auto-initializes when script loads
    // The widget div must be in DOM before script loads
    // Using Next.js Script component ensures proper loading
  }, [url]);

  return (
    <>
      {/* Calendly inline widget - exact match to official Calendly HTML */}
      {/* Official HTML: <div class="calendly-inline-widget" data-url="..." style="min-width:320px;height:700px;"></div> */}
      {/* Inline styles are required by Calendly's widget API */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
      
      {/* Load Calendly script - matches official implementation */}
      {/* Official: <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        id="calendly-inline-widget-script"
      />
    </>
  );
}
