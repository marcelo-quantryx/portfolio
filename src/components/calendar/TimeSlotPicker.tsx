import React from 'react';
import { format } from 'date-fns';
import type { DaySchedule } from '../../types/calendar';

interface TimeSlotPickerProps {
  schedule: DaySchedule;
  selectedTimeSlot: string | null;
  onSelectTimeSlot: (timeSlot: string) => void;
}

export function TimeSlotPicker({
  schedule,
  selectedTimeSlot,
  onSelectTimeSlot,
}: TimeSlotPickerProps) {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-900 mb-4">
        Available time slots for {format(schedule.date, 'MMMM d, yyyy')}
      </h4>
      <div className="grid grid-cols-3 gap-2">
        {schedule.slots.map((slot) => {
          const timeString = format(slot.start, 'HH:mm');
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