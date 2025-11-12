type AnalyticsProperties = Record<string, unknown>;

export interface AnalyticsEvent {
  name: string;
  properties?: AnalyticsProperties;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    event: event.name,
    ...(event.properties ?? {}),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (!import.meta.env.PROD) {
    // eslint-disable-next-line no-console
    console.info('[analytics]', payload);
  }
}

export function trackCtaClick(location: string, label: string) {
  trackEvent({
    name: 'cta_click',
    properties: {
      location,
      label,
    },
  });
}

export function trackNavigation(location: string, target: string) {
  trackEvent({
    name: 'navigation_click',
    properties: {
      location,
      target,
    },
  });
}

export function trackContactSubmission(method: string) {
  trackEvent({
    name: 'contact_submission',
    properties: {
      method,
    },
  });
}

export function trackSocialClick(platform: string) {
  trackEvent({
    name: 'social_click',
    properties: {
      platform,
    },
  });
}

