import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";

export const aboutFAQ: Array<{ question: string; content: ReactNode }> = [
  {
    question: `What is boba tea?`,
    content: (
      <Accordion.Content className="faq_answer">
        &quot;Boba&quot; or bubble tea -- so-called for its sweet, chewy tapioca
        pearls. The drink originated in Taiwan and surged in popularity with
        Asian American youth in the 1990s, quickly becoming part of the Asian
        American subculture. We often meet at places serving boba.
      </Accordion.Content>
    ),
  },
  {
    question: `What is a munch?`,
    content: (
      <Accordion.Content className="faq_answer">
        A munch is a social gathering of kinky people with an emphasis on
        community and conversation. BOBA Munch hosts all of our munches at
        venues serving boba tea, in contrast to restaurants and bars where
        munches are typically held.
      </Accordion.Content>
    ),
  },
  {
    question: `When and where was the first ever BOBA Munch held?`,
    content: (
      <Accordion.Content className="faq_answer">
        Sunday, August 1st, 2021 from 2:00 to 4:00PM at Main Street Cupertino!
      </Accordion.Content>
    ),
  },

  {
    question: `What does "Bobae" mean?`,
    content: (
      <Accordion.Content className="faq_answer">
        An affectionate term coined by one of our members to refer to BOBA Munch
        members. The plural is "Bobaes".
      </Accordion.Content>
    ),
  },
  {
    question: `Why should I join the Discord server?`,
    content: (
      <Accordion.Content className="faq_answer">
        The server acts as a online third place where you can continue meeting
        and talking with your fellow Bobaes outside the munch. Our community
        often hosts official and unofficial events that are only available to
        server members.
      </Accordion.Content>
    ),
  },
  {
    question: `How do I join the Discord server?`,
    content: (
      <Accordion.Content className="faq_answer">
        We only give out Discord invites to attendees of our in-person events.
      </Accordion.Content>
    ),
  },
];

export const eventFAQ: Array<{ question: string; content: ReactNode }> = [
  {
    question: `When and where are BOBA Munches held?`,
    content: (
      <Accordion.Content className="faq_answer">
        Unless otherwise stated, our in-person monthly munches will be on the
        second Sunday of the month. Our munches rotate between San Francisco,
        East Bay, and San Jose.
      </Accordion.Content>
    ),
  },
  {
    question: `Can I bring a plus one?`,
    content: (
      <Accordion.Content className="faq_answer">
        We allow 1 plus one per member. They must be 18 or older and
        kink-friendly.
      </Accordion.Content>
    ),
  },
  {
    question: `What are the vaccine/booster requirements?`,
    content: (
      <Accordion.Content className="faq_answer">
        We expect all members attending BOBA Munch events to have received a
        COVID shot within the last 12 months. Read{" "}
        <a href="https://fetlife.com/users/14009315/posts/7689352">here</a> for
        more information.
      </Accordion.Content>
    ),
  },
  {
    question: `What does being a 'dry' munch mean?`,
    content: (
      <Accordion.Content className="faq_answer">
        Official BOBA Munches are dry events -- not hosted at bars primarily
        serving alcoholic beverages -- to provide a safe and inclusive
        environment for all eligible members who are 18 or older. People may
        wish to avoid alcohol consumption for personal, religious, cultural, or
        dietary reasons. Personal consumption of alcohol and other substances is
        permitted when appropriate.
      </Accordion.Content>
    ),
  },
  {
    question: `How many people usually attend?`,
    content: (
      <Accordion.Content className="faq_answer">
        Typically around 40 - 70 people attend our offical munches.
      </Accordion.Content>
    ),
  },
  {
    question: `How do I report concerning behavior or individuals?`,
    content: (
      <Accordion.Content className="faq_answer">
        Please reach out via{" "}
        <a href="https://www.instagram.com/bobamunch/">Instagram</a>,{" "}
        <a href="https://fetlife.com/users/14009315">Fetlife</a>, or{" "}
        <a href="mailto:bobamunch@gmail.com">email.</a> Provide as much
        information as you can.
      </Accordion.Content>
    ),
  },
];
