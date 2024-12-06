import React, { useState } from 'react';
import { startOfMonth, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MonthView } from './MonthView';
import { TimeSlotPicker } from './TimeSlotPicker';
import { SchedulingForm } from './SchedulingForm';
import type { DaySchedule, SchedulingFormData } from '../../types/calendar';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timezone, setTimezone] = useState(() => 
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [status, setStatus] = useState<'idle' | 'scheduling' | 'success' | 'error'>('idle');

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const generateTimeSlots = (date: Date): DaySchedule => {
    const slots = [];
    let current = new Date(date);
    current.setHours(9, 0, 0, 0); // Start at 9 AM

    for (let i = 0; i < 16; i++) { // Until 5 PM
      const start = new Date(current);
      const end = new Date(current.setMinutes(current.getMinutes() + 30));
      
      slots.push({
        start,
        end,
        available: true
      });
      current.setMinutes(current.getMinutes() + 30);
    }

    return { date, slots };
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setStatus('idle');
  };

  const handleSchedule = async (data: SchedulingFormData) => {
    try {
      setStatus('scheduling');
      // Here you would send the scheduling data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setSelectedDate(null);
      setSelectedTimeSlot(null);
    } catch (error) {
      console.error('Failed to schedule meeting:', error);
      setStatus('error');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Meeting</h3>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <MonthView
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          onMonthChange={(date) => setCurrentDate(date)}
        />

        {selectedDate && (
          <div className="p-4 border-t border-gray-200">
            <TimeSlotPicker
              schedule={generateTimeSlots(selectedDate)}
              selectedTimeSlot={selectedTimeSlot}
              onSelectTimeSlot={setSelectedTimeSlot}
              timezone={timezone}
              onTimezoneChange={setTimezone}
            />
          </div>
        )}

        {selectedTimeSlot && (
          <div className="p-4 border-t border-gray-200">
            <SchedulingForm
              date={selectedDate!}
              timeSlot={selectedTimeSlot}
              timezone={timezone}
              onSchedule={handleSchedule}
              status={status}
            />
          </div>
        )}
      </div>
    </div>
  );
}