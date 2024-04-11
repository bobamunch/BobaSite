import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

export default function CalendarPage() {
  return (
    <div>
      <FullCalendar
        events={[
          {
            title: "event1",
            start: "2024-04-30",
          },
        ]}
        headerToolbar={{
          start: "title",
          center: "dayGridMonth listMonth",
          end: "prev,today,next",
        }}
        plugins={[dayGridPlugin, listPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}
