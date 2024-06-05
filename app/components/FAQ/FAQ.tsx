import * as Accordion from "@radix-ui/react-accordion";
import React, { ReactNode } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

interface FAQProps {
  title: string;
  htmlTitle: string;
  faqItems: Array<{ question: string; content: ReactNode }>;
}

/* TODO: figure out how to type */
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="faq__question"
        {...props}
        ref={forwardedRef}
      >
        <PlusIcon className="faq_question__plus_icon" />
        <MinusIcon className="faq_question__minus_icon" />
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

export default function FAQ(props: FAQProps) {
  const { title, htmlTitle, faqItems } = props;
  return (
    <div className="faq-section">
      <h2 className="faq__title">{title}</h2>
      <Accordion.Root type={"multiple"}>
        {faqItems.map(({ question, content }, index) => (
          <Accordion.AccordionItem
            key={`${htmlTitle}-faq-item` + index}
            value={`${htmlTitle}-faq-item` + index}
          >
            <AccordionTrigger>{question}</AccordionTrigger>
            {content}
          </Accordion.AccordionItem>
        ))}
      </Accordion.Root>
    </div>
  );
}
