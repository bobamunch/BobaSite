import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = dayjsLocalizer(dayjs); // or globalizeLocalizer

export default function EventsCalendar() {
  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
