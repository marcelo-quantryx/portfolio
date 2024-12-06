import React, { useState } from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import type { SchedulingFormData } from '../../types/calendar';

interface SchedulingFormProps {
  date: Date;
  timeSlot: string;
  timezone: string;
  status: 'idle' | 'scheduling' | 'success' | 'error';
  onSchedule: (data: SchedulingFormData) => void;
}

export function SchedulingForm({ date, timeSlot, timezone, status, onSchedule }: SchedulingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSchedule({
      ...formData,
      date,
      timeSlot,
      timezone
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          Schedule for {formatInTimeZone(date, timezone, 'MMMM d, yyyy')} at {timeSlot}
        </h4>
        <p className="text-sm text-gray-600">
          Timezone: {timezone}
        </p>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === 'scheduling'}
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === 'scheduling'}
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Meeting Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          disabled={status === 'scheduling'}
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      {status === 'success' && (
        <p className="text-green-600 text-sm">Meeting scheduled successfully! Check your email for details.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Failed to schedule meeting. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === 'scheduling'}
        className={`w-full bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors ${
          status === 'scheduling'
            ? 'opacity-75 cursor-not-allowed'
            : 'hover:bg-gray-800'
        }`}
      >
        {status === 'scheduling' ? 'Scheduling...' : 'Schedule Meeting'}
      </button>
    </form>
  );
}