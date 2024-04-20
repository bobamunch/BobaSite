import About from "../components/Home/About";
import FAQ from "../components/FAQ/FAQ";
import { aboutFAQ } from "~/components/FAQ/FAQItems";

export default function Index() {
  return (
    <>
      <About />
      <FAQ title="FAQ" htmlTitle="faq" faqItems={aboutFAQ} />
    </>
  );
}
