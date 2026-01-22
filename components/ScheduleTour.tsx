'use client';

import { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { oldSiteData } from '@/lib/fetchOldSiteData';
import { Button } from './ui/button';

type ScheduleTourProps = {
  inline?: boolean;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
};

export default function ScheduleTour({
  inline = false,
  variant = 'accent',
  size = 'lg',
  className = '',
}: ScheduleTourProps) {
  const calendlyUrl = oldSiteData.integrations.calendly;

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existingScript) {
      return; // Script already loaded
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

  if (inline) {
    return (
      <div className="w-full">
        {/* Calendly requires inline styles for proper widget rendering */}
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div
          className="calendly-inline-widget rounded-lg overflow-hidden"
          data-url={calendlyUrl}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    );
  }

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback: open in new tab if Calendly script hasn't loaded yet
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      onClick={handleScheduleClick}
      variant={variant}
      size={size}
      className={`${className} flex items-center gap-2`}
    >
      <Calendar className="w-5 h-5" />
      Schedule a Tour
    </Button>
  );
}
