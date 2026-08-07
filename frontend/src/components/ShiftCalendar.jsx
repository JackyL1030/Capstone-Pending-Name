import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { getShifts } from "../services/shiftService";
import useAuth from "../context/useAuth";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function ShiftCalendar() {
  const { token } = useAuth();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const shifts = await getShifts(token);

        const calendarEvents = shifts.map((shift) => ({
          id: shift._id,
          title: shift.employee.name,
          start: new Date(shift.startTime),
          end: new Date(shift.endTime),
        }));

        setEvents(calendarEvents);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchShifts();
  }, [token]);

  return (
    <div className="shift-calendar">
      <h2>Weekly Schedule</h2>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
