export const GA_TRACKING_ID = 'G-JPZVDX6E1L';

// Initialize GA4
export const initGA4 = () => {
  // Load the GA4 script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure'
  });
};

// Log page views
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      send_to: GA_TRACKING_ID
    });
  }
};

// Log specific events
export const event = ({ 
  action, 
  category, 
  label, 
  value 
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      send_to: GA_TRACKING_ID
    });
  }
};