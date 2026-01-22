'use client';

import Script from 'next/script';

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: { 
        url: string; 
        text: string; 
        color: string; 
        textColor: string; 
        branding: boolean;
      }) => void;
    };
  }
}

export default function CalendlyBadge() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/drjanduffy/showing',
            text: 'See Available Home',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true
          });
        }
      }}
    />
  );
}
