import About from "../components/Home/About";
import FAQ from "../components/FAQ/FAQ";
import MainLogo from "~/components/MainLogo/MainLogo";

import { json } from "@remix-run/node";
import { calendar_v3, calendar } from "@googleapis/calendar";
import { useLoaderData } from "@remix-run/react";
import EventCard from "~/components/EventCard/EventCard";
import { aboutFAQ } from "~/components/FAQ/FAQItems";
import * as Separator from "@radix-ui/react-separator";

const bobaes = [
  "boba-bear.png",
  "boba-camo.png",
  "boba-cat.png",
  "boba-cow.png",
  "boba-fan.png",
  "boba-flannel.png",
  "boba-frog.png",
  "boba-hawaii.png",
  "boba-impact.png",
  "boba-maid.png",
  "boba-rainbow.png",
  "boba-rope.png",
  "boba-unicorn.png",
];

const eventsCalendar: calendar_v3.Calendar = calendar({
  version: "v3",
  auth: process.env.GCAL_API_KEY,
});

function mulberry32(a: number) {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const loader = async () => {
  const events = await eventsCalendar.events.list({
    calendarId: process.env.CALENDAR_URL,
    orderBy: "startTime",
    maxResults: 1,
    singleEvents: true,
    timeMin: new Date().toISOString(),
  });

  const calendarEvents = events.data.items;

  const seed = (Math.random() * 2 ** 32) >>> 0;
  const getRandom = mulberry32(seed);

  return json({
    events: calendarEvents ?? [],
    image: bobaes[Math.floor(getRandom() * bobaes.length)],
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <main>
      <title>What is BOBA Munch?</title>
      <div className="horizontal-center">
        <div className="logo-wrapper">
          <MainLogo />
        </div>
        <div className="event-card">
          {data.events?.map((event, index) => (
            <EventCard
              key={`event${index}`}
              name={event?.summary ?? ""}
              location={event.location ?? ""}
              startDate={event?.start?.dateTime ?? ""}
              endDate={event?.end?.dateTime ?? ""}
              link={event?.htmlLink ?? ""}
              image={data.image}
            />
          ))}
        </div>
        <About />
        <Separator.Root className="separator" decorative />
        <FAQ title="FAQ" htmlTitle="faq" faqItems={aboutFAQ} />
      </div>
    </main>
  );
}
