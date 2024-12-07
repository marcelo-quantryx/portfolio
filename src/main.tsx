import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { AnalyticsProvider } from './components/analytics/AnalyticsProvider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AnalyticsProvider>
        <App />
      </AnalyticsProvider>
    </HelmetProvider>
  </StrictMode>
);