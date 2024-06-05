import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";

import FAQ from "~/components/FAQ/FAQ";
import { eventFAQ } from "~/components/FAQ/FAQItems";
import React from "react";

// function renderEventContent(eventInfo: any) {
//   return (
//     <a href={eventInfo.event.url} title={eventInfo.event.url}>
//       <b>{eventInfo.event.title}</b>
//       {eventInfo.event.extendedProps.location && (
//         <>
//           {"  "}
//           <i>{eventInfo.event.extendedProps.location}</i>
//         </>
//       )}
//     </a>
//   );
// }

export default function CalendarPage() {
  return (
    <main className="page-content">
      <div>
        {/* <FullCalendar
          showNonCurrentDates={false}
          fixedWeekCount={false}
          googleCalendarApiKey={""}
          events={{
            googleCalendarId:
              "",
          }}
          headerToolbar={{
            start: "title",
            // center: "dayGridMonth listYear",
            end: "prev,today,next",
          }}
          validRange={function (nowDate) {
            return {
              start: nowDate,
            };
          }}
          // eventContent={renderEventContent}
          plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
          initialView="list"
          duration={{ months: 4 }}
        /> */}
        <iframe
          src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23e5a363&title=Official%20Events%20&showPrint=0&showTabs=0&showNav=0&showDate=0&mode=AGENDA&showCalendars=0&src=ODgzOGNjMzMwYzBiNzcxZjE5MzQ1MmVhMjFmOTI1NmMyNjdiODIyYzgwNTk2YzJjM2M0YTgyNWEwOGQ2MmI3MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
          style={{ border: "solid 1px #777" }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <FAQ title="Event FAQ" htmlTitle="event-faq" faqItems={eventFAQ} />
      </div>
    </main>
  );
}
