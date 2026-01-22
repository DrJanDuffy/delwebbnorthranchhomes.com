'use client';

import Script from 'next/script';

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
