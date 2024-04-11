import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Heading,
  Paragraph,
} from "grommet";

export default function FAQ() {
  return (
    <Box>
      <Heading>FAQ</Heading>
      <Accordion>
        <AccordionPanel header={"What is a munch?"}>
          <Paragraph>
            A munch is a social gathering of kinky people with an emphasis on
            community and conversation. BOBA Munch hosts all of our munches at
            venues serving boba tea, in contrast to restaurants and bars where
            munches are typically held.
          </Paragraph>
        </AccordionPanel>
        <AccordionPanel header={"What is boba tea"}>
          “Boba” is a term for the sweet, chewy tapioca pearls in bubble tea.
          The drink originated in Taiwan and surged in popularity with Asian
          American youth in the 90s, quickly becoming part of the Asian American
          subculture.
        </AccordionPanel>
        <AccordionPanel header={"How do I join the Discord server?"}>
          <Paragraph>
            Join our Discord by attending in-person munches or by following
            these
            <Anchor href="https://fetlife.com/groups/223073/posts/18659384">
              steps
            </Anchor>
            .
          </Paragraph>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
}
