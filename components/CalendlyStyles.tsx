'use client';

/**
 * Loads Calendly widget CSS in a non-render-blocking way so it doesn't delay FCP/LCP.
 * Uses media="print" + onLoad to switch to "all" after load (standard async CSS pattern).
 */
export default function CalendlyStyles() {
  return (
    <link
      rel="stylesheet"
      href="https://assets.calendly.com/assets/external/widget.css"
      media="print"
      onLoad={(e) => {
        const link = e.currentTarget;
        if (link) link.media = 'all';
      }}
    />
  );
}
