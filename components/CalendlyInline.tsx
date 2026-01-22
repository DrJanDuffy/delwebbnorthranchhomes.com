'use client';

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
  return (
    <>
      {/* Calendly inline widget - matches official Calendly code */}
      {/* Inline styles are required by Calendly's widget API */}
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ minWidth: '320px', height }}
      />
      {/* Calendly widget script - loaded with async as per official code */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
