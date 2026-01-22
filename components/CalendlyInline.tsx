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
    // Load Calendly widget script - matches ScheduleTour pattern
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existingScript) {
      return; // Script already loaded, widget will auto-initialize
    }

    document.body.appendChild(script);

    return () => {
      // Only remove if we added it
      const scriptToRemove = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (scriptToRemove && scriptToRemove === script) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className={className}>
      {/* Calendly inline widget - exact match to official Calendly HTML */}
      {/* Official HTML: <div class="calendly-inline-widget" data-url="..." style="min-width:320px;height:700px;"></div> */}
      {/* Inline styles are required by Calendly's widget API */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
    </div>
  );
}
