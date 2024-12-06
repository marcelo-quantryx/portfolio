import type { SchedulingFormData } from '../types/calendar';

export async function getCalendarAvailability(
  accessToken: string,
  startDate: Date,
  endDate: Date,
  timezone: string
) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/freeBusy`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeMin: startDate.toISOString(),
          timeMax: endDate.toISOString(),
          timeZone: timezone,
          items: [{ id: 'primary' }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch calendar availability');
    }

    const data = await response.json();
    return data.calendars.primary.busy;
  } catch (error) {
    console.error('Error fetching calendar availability:', error);
    throw error;
  }
}

export async function createGoogleCalendarEvent(
  accessToken: string,
  formData: SchedulingFormData
) {
  const [hours, minutes] = formData.timeSlot.split(':');
  const startTime = new Date(formData.date);
  startTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
  
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + 30);

  const event = {
    summary: `Meeting with ${formData.name}`,
    description: formData.description,
    start: {
      dateTime: startTime.toISOString(),
      timeZone: formData.timezone,
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: formData.timezone,
    },
    attendees: [{ email: formData.email }],
    conferenceData: {
      createRequest: {
        requestId: crypto.randomUUID(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  try {
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create calendar event');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}