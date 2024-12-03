import React from 'react';

interface TimelineConnectorProps {
  isLast: boolean;
}

export function TimelineConnector({ isLast }: TimelineConnectorProps) {
  if (isLast) return null;
  
  return (
    <div className="w-0.5 h-full bg-gray-200 absolute top-12" />
  );
}