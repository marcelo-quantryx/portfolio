import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { initGA4 } from '../../utils/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGA4();
  }, []);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}