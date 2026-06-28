'use client';

import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/calendly';

type CalendlyButtonProps = {
  url?: string;
  text?: string;
};

export default function CalendlyButton({
  url = CALENDLY_URL,
  text = 'Schedule time with me',
}: CalendlyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('calendly-button-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('calendly-button-dismissed', 'true');
  };

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="hidden md:block relative">
        <button
          type="button"
          onClick={handleClick}
          className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[44px] min-w-[44px]"
          aria-label={text}
        >
          <Calendar className="w-5 h-5" aria-hidden />
          <span>{text}</span>
        </button>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-11 h-11 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Dismiss scheduling button"
        >
          <X className="w-4 h-4" aria-hidden />
        </button>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center gap-2 text-white font-semibold flex-1 min-h-[44px]"
            aria-label={text}
          >
            <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden />
            <span className="text-sm md:text-base">{text}</span>
          </button>

          <button
            type="button"
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Dismiss scheduling button"
          >
            <X className="w-5 h-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
