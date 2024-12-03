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
}

export interface DaySchedule {
  date: Date;
  slots: TimeSlot[];
}