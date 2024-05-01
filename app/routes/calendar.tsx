import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FAQ from "~/components/FAQ/FAQ";
import { eventFAQ } from "~/components/FAQ/FAQItems";

export default function CalendarPage() {
  return (
    <main className="page-content">
      <FullCalendar
        showNonCurrentDates={false}
        fixedWeekCount={false}
        events={[
          {
            title: "event1",
            start: "2024-05-11",
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

      <div>
        <FAQ title="Event FAQ" htmlTitle="event-faq" faqItems={eventFAQ} />
      </div>
    </main>
  );
}
