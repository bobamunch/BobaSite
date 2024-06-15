/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import FAQ from "~/components/FAQ/FAQ";
import { eventFAQ } from "~/components/FAQ/FAQItems";

import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { json, useLoaderData } from "@remix-run/react";

import { CalendarIcon } from "@radix-ui/react-icons";

export async function loader() {
  return json({
    GCAL_API_KEY: process.env.GCAL_API_KEY,
    CALENDAR_URL: process.env.CALENDAR_URL,
  });
}

const CALENDAR_LINK =
  "https://calendar.google.com/calendar/u/0?cid=ODgzOGNjMzMwYzBiNzcxZjE5MzQ1MmVhMjFmOTI1NmMyNjdiODIyYzgwNTk2YzJjM2M0YTgyNWEwOGQ2MmI3MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

export default function CalendarPage() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      <title>BOBA Munch Calendar</title>
      <div className="horizontal-center">
        <h2>Calendar</h2>
        <p>
          Unless otherwise stated, our in-person monthly munches will be on the
          second Sunday of the month. Our munches rotate between San Francisco,
          East Bay, and San Jose. This calendar lists all of our public events
          including the monthly munches!
        </p>

        <FullCalendar
          height={500}
          eventColor="#E5A363"
          showNonCurrentDates={false}
          googleCalendarApiKey={data.GCAL_API_KEY}
          events={{
            googleCalendarId: data.CALENDAR_URL,
          }}
          headerToolbar={{
            start: "",
            end: "",
          }}
          validRange={function (nowDate) {
            return {
              start: nowDate,
            };
          }}
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listYear"
        />

        <div
          className="add-calendar-button"
          title="Add the Boba Munch Calendar!"
          onClick={() => {
            document.location.href = CALENDAR_LINK;
          }}
        >
          <CalendarIcon
            height={26}
            width={26}
            fill={"#E5A363"} // needed to keep it orange
            className="footer__icon"
          />
          <div className="add-calendar-button__text">Add Calendar</div>
        </div>

        <FAQ title="Event FAQ" htmlTitle="event-faq" faqItems={eventFAQ} />
      </div>
    </main>
  );
}
