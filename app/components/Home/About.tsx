import * as Separator from "@radix-ui/react-separator";

export default function About() {
  return (
    <>
      <main>
        <h2>What is BOBA Munch?</h2>
        <p>
          BOBA Munch is a group based in the San Francisco Bay Area. We welcome
          individuals who identify with a broad range of identities including
          Asian, Asian American, Southeast Asian, Indian/South Asian, Middle
          Eastern, and Pacific Islander to attend our events. (If you have any
          questions about this, please contact a member of Leadership)
        </p>
        <p>
          BOBA Munch also facilitates meetups at various locations, including
          our in-person monthly munches on the second Sunday of each month
          (subject to change).
        </p>
        <p>
          Our goal is to empower and support individuals to connect in the kink,
          sex positive, and queer spaces.
        </p>
        <p>
          With recognition of the complex intersections of cultures, histories,
          and geographies that comprise our community, our intention is to
          create a welcoming space for a broad range of identities. If you
          identify as any of the aforementioned cultural groups, you are welcome
          to join us in our community where you can meet others with similar
          experiences.
        </p>
        <p>
          If not, please give us this space. Feel free to DM any member of
          Leadership listed on this{" "}
          <a href="https://fetlife.com/users/14009315">profile</a> if you have
          any questions.
        </p>
        <p>
          <b>DO NOT COME</b> to our events with the intention of cruising,
          hooking up with our members, satisfying any racial/ethnic fetishes, or
          bigotry.
        </p>
      </main>
      <Separator.Root className="separator" decorative />
    </>
  );
}
