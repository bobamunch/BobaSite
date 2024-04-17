import { ReactNode } from "react";

export const aboutFAQ: Array<{ question: string; content: ReactNode }> = [
  {
    question: `What is a munch?`,
    content: (
      <p>
        A munch is a social gathering of kinky people with an emphasis on
        community and conversation. BOBA Munch hosts all of our munches at
        venues serving boba tea, in contrast to restaurants and bars where
        munches are typically held.
      </p>
    ),
  },
  {
    question: `What is boba tea?`,
    content: (
      <p>
        &quot;Boba&quot; is a term for the sweet, chewy tapioca pearls in bubble
        tea. The drink originated in Taiwan and surged in popularity with Asian
        American youth in the 1990s, quickly becoming part of the Asian American
        subculture.
      </p>
    ),
  },

  {
    question: `How do I join the Discord server?`,
    content: (
      <p>
        Join our Discord by attending in-person munches or by following{" "}
        <a href="https://fetlife.com/groups/223073/posts/18659384">
          these steps
        </a>
        .
      </p>
    ),
  },
];

export const eventFAQ: Array<{ question: string; content: ReactNode }> = [
  {
    question: `When are BOBA Munches held?`,
    content: (
      <p>
        Unless otherwise stated, our in-person monthly munches will be on the
        second Sunday of the month.
      </p>
    ),
  },
  {
    question: `Where are BOBA Munches held?`,
    content: (
      <p>Our munches rotate between San Francisco, East Bay, and San Jose.</p>
    ),
  },

  {
    question: `Vaccine and booster requirements.`,
    content: (
      <p>
        We still expect all members attending BOBA Munch events to be fully
        vaccinated, including booster shots, as a condition of attendance.
      </p>
    ),
  },

  {
    question: `Being a dry munch.`,
    content: (
      <p>
        Official BOBA Munches are dry events -- not hosted at bars primarily
        serving alcoholic beverages -- to make sure all eligible members 18 or
        older can attend. Personal alcohol consumption is welcome when
        appropriate. Read{" "}
        <a href="https://fetlife.com/users/14009315/posts/7689352">here</a> for
        more information.
      </p>
    ),
  },
];
