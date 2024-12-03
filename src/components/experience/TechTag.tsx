import React from 'react';

interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      {name}
    </span>
  );
}