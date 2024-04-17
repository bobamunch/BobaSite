import * as Accordion from "@radix-ui/react-accordion";
import { ReactHTMLElement, ReactNode } from "react";

interface FAQItemProps {
  value: string;
  question: string;
  content: ReactNode;
}

interface FAQProps {
  title: string;
  htmlTitle: string;
  faqItems: Array<{ question: string; content: ReactNode }>;
}

function FAQItem(props: FAQItemProps) {
  const { value, question, content } = props;

  return (
    <Accordion.AccordionItem value={value}>
      <Accordion.Header>
        <Accordion.AccordionTrigger className="faq__question">
          <h3>{question}</h3>
        </Accordion.AccordionTrigger>
      </Accordion.Header>
      <Accordion.Content>{content}</Accordion.Content>
    </Accordion.AccordionItem>
  );
}

export default function FAQ(props: FAQProps) {
  const { title, htmlTitle, faqItems } = props;
  return (
    <>
      <h2>{title}</h2>
      <Accordion.Root type={"multiple"}>
        {faqItems.map(({ question, content }, index) => (
          <FAQItem
            key={`${htmlTitle}-faq-item` + index}
            value={`${htmlTitle}-faq-item` + index}
            question={question}
            content={content}
          />
        ))}
      </Accordion.Root>
    </>
  );
}
