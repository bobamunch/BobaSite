import About from "../components/Home/About";
import FAQ from "../components/FAQ/FAQ";
import MainLogo from "~/components/MainLogo/MainLogo";

import { json } from "@remix-run/node";
import { calendar_v3, calendar } from "@googleapis/calendar";
import { useLoaderData } from "@remix-run/react";
import EventCard from "~/components/EventCard/EventCard";
import { aboutFAQ } from "~/components/FAQ/FAQItems";

export const loader = async () => {
  const eventsCalendar: calendar_v3.Calendar = calendar({
    version: "v3",
    auth: process.env.GCAL_API_KEY,
  });

  const events = await eventsCalendar.events.list({
    calendarId: process.env.CALENDAR_URL,
    orderBy: "startTime",
    maxResults: 1,
    singleEvents: true,
    timeMin: new Date().toISOString(),
  });

  const result = events.data.items;

  if (!result) {
    throw new Response("Not found", { status: 404 });
  }
  return json(result);
};

export default function Index() {
  const events = useLoaderData<typeof loader>();

  return (
    <main className="page-content">
      <MainLogo />
      <div className="event-card">
        {events?.map((event, index) => (
          <EventCard
            key={`event${index}`}
            name={event?.summary ?? ""}
            location={event.location ?? ""}
            startDate={event?.start?.dateTime ?? ""}
            endDate={event?.end?.dateTime ?? ""}
            link={event?.htmlLink ?? ""}
          />
        ))}
      </div>
      <About />

      <FAQ title="FAQ" htmlTitle="faq" faqItems={aboutFAQ} />
    </main>
  );
}
