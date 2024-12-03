import React, { useState } from 'react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TimeSlotPicker } from './TimeSlotPicker';
import { SchedulingForm } from './SchedulingForm';
import type { DaySchedule } from '../../types/calendar';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentWeek, setCurrentWeek] = useState<Date>(startOfWeek(new Date()));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const generateTimeSlots = (date: Date): DaySchedule => {
    const slots = [];
    let current = new Date(date);
    current.setHours(9, 0, 0, 0);

    for (let i = 0; i < 16; i++) {
      slots.push({
        start: new Date(current),
        end: new Date(current.setMinutes(current.getMinutes() + 30)),
        available: Math.random() > 0.3, // Simulate availability
      });
      current.setMinutes(current.getMinutes() + 30);
    }

    return { date, slots };
  };

  const handlePreviousWeek = () => {
    setCurrentWeek(prev => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setCurrentWeek(prev => addDays(prev, 7));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Select a Date & Time
          </h3>
          <div className="flex gap-2">
            <button
              onClick={handlePreviousWeek}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextWeek}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => handleDateSelect(date)}
              className={`
                p-2 rounded-lg text-sm font-medium
                ${isSameDay(date, selectedDate)
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-100'
                }
              `}
            >
              <div className="text-xs mb-1">{format(date, 'EEE')}</div>
              <div>{format(date, 'd')}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="p-4">
          <TimeSlotPicker
            schedule={generateTimeSlots(selectedDate)}
            selectedTimeSlot={selectedTimeSlot}
            onSelectTimeSlot={setSelectedTimeSlot}
          />
        </div>
      )}

      {selectedTimeSlot && (
        <div className="p-4 border-t border-gray-200">
          <SchedulingForm
            date={selectedDate}
            timeSlot={selectedTimeSlot}
            onSchedule={(data) => {
              console.log('Scheduling meeting:', data);
              // Here you would integrate with Google Calendar API
            }}
          />
        </div>
      )}
    </div>
  );
}