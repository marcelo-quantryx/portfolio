import React from 'react';
import { Globe } from 'lucide-react';
import type { Timezone } from '../../types/calendar';

interface TimezoneSelectProps {
  value: string;
  onChange: (timezone: string) => void;
}

export function TimezoneSelect({ value, onChange }: TimezoneSelectProps) {
  const timezones = Intl.supportedValuesOf('timeZone').map(tz => ({
    value: tz,
    label: tz.replace(/_/g, ' '),
    offset: new Date().toLocaleString('en-US', { timeZone: tz, timeZoneName: 'short' }).split(' ').pop(),
  }));

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 py-1 px-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label} ({tz.offset})
          </option>
        ))}
      </select>
    </div>
  );
}