import React from 'react';
import { useTracking } from '../../hooks/useTracking';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  category?: string;
}

export function Link({ href, children, category = 'navigation', ...props }: LinkProps) {
  const { trackEvent } = useTracking();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Track the click event
    trackEvent(category, 'click', href);
    
    // If it's a hash link on the home page, handle smooth scrolling
    if (href.startsWith('/#') && window.location.pathname === '/') {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // If it's a hash link but we're not on the home page, go home first
    if (href.startsWith('/#')) {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Regular navigation
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}