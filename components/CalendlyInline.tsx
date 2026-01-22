'use client';

import { useEffect } from 'react';

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
    // Load Calendly widget script if not already loaded
    // This matches Calendly's official implementation
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Calendly inline widget - matches official Calendly code exactly */}
      {/* Official format: <div class="calendly-inline-widget" data-url="..." style="min-width:320px;height:700px;"></div> */}
      {/* Inline styles are required by Calendly's widget API */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
    </>
  );
}
