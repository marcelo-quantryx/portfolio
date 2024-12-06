export interface TimeSlot {
  start: Date;
  end: Date;
  available: boolean;
}

export interface SchedulingFormData {
  name: string;
  email: string;
  date: Date;
  timeSlot: string;
  description: string;
  timezone: string;
}

export interface DaySchedule {
  date: Date;
  slots: TimeSlot[];
}

export interface Timezone {
  value: string;
  label: string;
  offset: number;
  abbrev: string;
}