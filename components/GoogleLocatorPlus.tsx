'use client';

import { useEffect, useRef, useState } from 'react';
import { GOOGLE_LOCATOR_PLUS_URL } from '@/lib/site';

const HEIGHT_CLASSES = {
  compact: 'min-h-[400px] h-[400px]',
  default: 'min-h-[500px] h-[500px] md:h-[520px]',
  full: 'min-h-[560px] h-[560px] md:h-[600px]',
} as const;

type GoogleLocatorPlusHeight = keyof typeof HEIGHT_CLASSES;

type GoogleLocatorPlusProps = {
  /** Accessible title for the embedded map frame. */
  title?: string;
  className?: string;
  height?: GoogleLocatorPlusHeight;
};

export default function GoogleLocatorPlus({
  title = 'Google Maps locator for Del Webb North Ranch in North Las Vegas',
  className = '',
  height = 'default',
}: GoogleLocatorPlusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeAllowed, setIframeAllowed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIframeAllowed(true);
      },
      { rootMargin: '120px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-lg border border-gray-200 bg-bg-light shadow-two ${HEIGHT_CLASSES[height]} ${className}`}
    >
      {iframeAllowed ? (
        <iframe
          src={GOOGLE_LOCATOR_PLUS_URL}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="geolocation"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center px-6 text-center text-text-dark"
          aria-hidden="true"
        >
          <p className="text-sm text-gray-600">Loading map…</p>
        </div>
      )}
    </div>
  );
}
