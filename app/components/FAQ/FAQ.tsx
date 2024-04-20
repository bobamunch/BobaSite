import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

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
      <Accordion.AccordionTrigger className="faq__question">
        <Accordion.Header className="faq__header">
          <PlusIcon className="faq_question__plus_icon" />
          <MinusIcon className="faq_question__minus_icon" />
          {question}
        </Accordion.Header>
      </Accordion.AccordionTrigger>

      <Accordion.Content>{content}</Accordion.Content>
    </Accordion.AccordionItem>
  );
}

export default function FAQ(props: FAQProps) {
  const { title, htmlTitle, faqItems } = props;
  return (
    <>
      <h2 className="faq__title">{title}</h2>
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
