import * as Accordion from "@radix-ui/react-accordion";
import { ReactHTMLElement, ReactNode } from "react";

interface FAQItemProps {
  value: string;
  question: string;
  content: ReactNode;
}

const faqItems: Array<{ question: string; content: ReactNode }> = [
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

function FAQItem(props: FAQItemProps) {
  const { value, question, content } = props;
  return (
    <Accordion.AccordionItem value={value}>
      <Accordion.Header>
        <Accordion.AccordionTrigger>
          <h3>{question}</h3>
        </Accordion.AccordionTrigger>
      </Accordion.Header>
      <Accordion.Content>{content}</Accordion.Content>
    </Accordion.AccordionItem>
  );
}

export default function FAQ() {
  return (
    <>
      <h2>FAQ</h2>
      <Accordion.Root type={"multiple"}>
        {faqItems.map(({ question, content }, index) => (
          <FAQItem
            key={"faq-item" + index}
            value={"faq-item" + index}
            question={question}
            content={content}
          />
        ))}
      </Accordion.Root>
    </>
  );
}
