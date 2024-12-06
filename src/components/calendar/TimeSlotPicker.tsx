import React from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { TimezoneSelect } from './TimezoneSelect';
import type { DaySchedule } from '../../types/calendar';

interface TimeSlotPickerProps {
  schedule: DaySchedule;
  selectedTimeSlot: string | null;
  onSelectTimeSlot: (timeSlot: string) => void;
  timezone: string;
  onTimezoneChange: (timezone: string) => void;
}

export function TimeSlotPicker({
  schedule,
  selectedTimeSlot,
  onSelectTimeSlot,
  timezone,
  onTimezoneChange
}: TimeSlotPickerProps) {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-900 mb-2">
        Available time slots for {formatInTimeZone(schedule.date, timezone, 'MMMM d, yyyy')}
      </h4>
      <div className="mb-4">
        <TimezoneSelect value={timezone} onChange={onTimezoneChange} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {schedule.slots.map((slot) => {
          const timeString = formatInTimeZone(slot.start, timezone, 'HH:mm');
          return (
            <button
              key={timeString}
              onClick={() => slot.available && onSelectTimeSlot(timeString)}
              disabled={!slot.available}
              className={`
                p-2 rounded-lg text-sm font-medium
                ${!slot.available
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : timeString === selectedTimeSlot
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-100'
                }
              `}
            >
              {timeString}
            </button>
          );
        })}
      </div>
    </div>
  );
}