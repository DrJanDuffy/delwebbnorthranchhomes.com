/**
 * Load RealScout web components script once globally.
 * Used by RealScoutListings and HomesForSaleWidget so they load the script
 * only when in viewport (keeps ~420KB + MUI/Google Fonts off critical path).
 */

/** Delay (ms) after section is in view before loading script; keeps MUI/Google Fonts off LCP. */
export const REALSCOUT_LOAD_DELAY_MS = 2000;

const REALSCOUT_SCRIPT_URL =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const WIDGET_TAG = 'realscout-office-listings';

declare global {
  interface Window {
    __realscoutScriptLoading?: Promise<void>;
  }
}

/** Load RealScout script once globally; resolves when custom element is defined. */
export function loadRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  const existing = document.querySelector(`script[src*="realscout-web-components"]`);
  if (existing) {
    return customElements.whenDefined(WIDGET_TAG).then(() => {});
  }
  if (window.__realscoutScriptLoading) return window.__realscoutScriptLoading;
  window.__realscoutScriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = REALSCOUT_SCRIPT_URL;
    script.type = 'module';
    script.onload = () =>
      customElements.whenDefined(WIDGET_TAG).then(() => resolve());
    script.onerror = () => reject(new Error('RealScout script failed to load'));
    document.body.appendChild(script);
  });
  return window.__realscoutScriptLoading;
}
