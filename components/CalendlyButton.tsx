'use client';

import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import Script from 'next/script';

type CalendlyButtonProps = {
  url?: string;
  text?: string;
};

export default function CalendlyButton({
  url = 'https://calendly.com/drjanduffy/appointment',
  text = 'Schedule My Tour',
}: CalendlyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if button was dismissed in this session
    const dismissed = localStorage.getItem('calendly-button-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Store dismissal preference in localStorage
    localStorage.setItem('calendly-button-dismissed', 'true');
  };

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab if script hasn't loaded yet
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (isDismissed) {
    return null;
  }

  return (
    <>
      {/* Calendly Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      
      {/* Floating Button */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Desktop: Floating circular button */}
        <div className="hidden md:block relative">
          <button
            onClick={handleClick}
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label={text}
          >
            <Calendar className="w-5 h-5" />
            <span>{text}</span>
          </button>
          
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile: Full-width bar at bottom */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-lg">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 text-white font-semibold flex-1"
              aria-label={text}
            >
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">{text}</span>
            </button>
            
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
