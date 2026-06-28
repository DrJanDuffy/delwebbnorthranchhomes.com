/** Calendly event URL – matches embed code from Calendly dashboard. */
export const CALENDLY_URL =
  "https://calendly.com/drjanduffy/in-person-real-estate-consultation";

export const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";

export const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

export const CALENDLY_BADGE = {
  text: "Schedule time with me",
  color: "#0069ff",
  textColor: "#ffffff",
  branding: false,
} as const;

export const CALENDLY_READY_EVENT = "calendly-ready";

/** Open the Calendly popup scheduler (link widget pattern). */
export function openCalendlyPopup(url: string = CALENDLY_URL): void {
  if (typeof window === "undefined") {
    return;
  }

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

/** Wait until the global Calendly script has loaded. */
export function whenCalendlyReady(callback: () => void): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  if (window.Calendly) {
    callback();
    return () => undefined;
  }

  window.addEventListener(CALENDLY_READY_EVENT, callback, { once: true });
  return () => window.removeEventListener(CALENDLY_READY_EVENT, callback);
}
