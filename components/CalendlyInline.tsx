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
    if (!widgetRef.current) return;

    const initWidget = () => {
      if (!widgetRef.current) return;
      
      // Check if widget already initialized
      if (widgetRef.current.querySelector('iframe')) {
        return; // Already initialized
      }

      // Try manual initialization using Calendly API
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        try {
          // Use initInlineWidget if available (newer API)
          if ((window as any).Calendly.initInlineWidget) {
            (window as any).Calendly.initInlineWidget({
              url: url,
              parentElement: widgetRef.current,
            });
          } else {
            // Fallback: ensure widget div has correct attributes for auto-init
            // Calendly should auto-detect elements with class 'calendly-inline-widget'
            // Force a re-scan by dispatching a custom event
            const event = new CustomEvent('calendly-widget-init', { bubbles: true });
            widgetRef.current.dispatchEvent(event);
          }
        } catch (error) {
          console.error('Error initializing Calendly widget:', error);
        }
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existingScript) {
      // Script already loaded
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        // Calendly is ready, try to initialize
        setTimeout(initWidget, 100);
      } else {
        // Script exists but not loaded yet
        existingScript.addEventListener('load', () => {
          setTimeout(initWidget, 100);
        });
      }
    } else {
      // Load script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        // Script loaded - try to initialize widget
        setTimeout(initWidget, 200);
      };
      
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div className={`${className} w-full`} style={{ minHeight: height }}>
      {/* Calendly inline widget - exact match to official HTML */}
      {/* Official: <div class="calendly-inline-widget" data-url="..." style="min-width:320px;height:700px;"></div> */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        ref={widgetRef}
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: '320px', height, width: '100%' }}
      />
    </div>
  );
}
