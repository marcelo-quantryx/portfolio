import { useCallback } from 'react';

export function useTracking() {
  const trackEvent = useCallback((category: string, action: string, label?: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'header_click',
        eventCategory: category,
        eventAction: action,
        eventLabel: label
      });
    }
  }, []);

  return { trackEvent };
}