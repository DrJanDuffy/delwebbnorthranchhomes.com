'use client';

import { useEffect, useRef } from 'react';

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
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure widget div is rendered first
    if (!widgetRef.current) return;

    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );

      if (existingScript) {
        // Script already loaded - widget should auto-initialize
        // But if it hasn't, wait a moment and check
        setTimeout(() => {
          if (widgetRef.current && !widgetRef.current.querySelector('iframe')) {
            // Widget didn't initialize, try to trigger it
            // Calendly should have already scanned, but sometimes needs a refresh
            const event = new Event('DOMContentLoaded', { bubbles: true });
            document.dispatchEvent(event);
          }
        }, 1000);
        return;
      }

      // Load script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        // Script loaded - widget should auto-initialize
        // Calendly scans for elements with class 'calendly-inline-widget'
        // Give it a moment to process
        setTimeout(() => {
          if (widgetRef.current && !widgetRef.current.querySelector('iframe')) {
            // Widget still not initialized - might need manual trigger
            console.log('Calendly script loaded, waiting for widget initialization...');
          }
        }, 500);
      };
      
      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [url]);

  return (
    <div className={className}>
      {/* Calendly inline widget - must match exact HTML structure */}
      {/* Official: <div class="calendly-inline-widget" data-url="..." style="min-width:320px;height:700px;"></div> */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        ref={widgetRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
    </div>
  );
}
