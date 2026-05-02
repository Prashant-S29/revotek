import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homePageContent } from "@/content/home.json";

export const FAQs: React.FC = () => {
  const { faq } = homePageContent;

  return (
    <section
      id="home-faqs"
      aria-labelledby="faq-heading"
      className="px-50 py-25 bg-gray-100"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-brand-primary">{faq.badgeTitle}</p>
        <h2
          id="faq-heading"
          className="text-5xl text-primary mt-5 font-semibold"
        >
          {faq.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-tight">
          {faq.description}
        </p>
      </div>

      <Accordion
        multiple
        className="mt-12 max-w-4xl border-none mx-auto flex flex-col gap-3"
      >
        {faq.items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-item-${index}`}
            className="bg-white data-open:bg-white  rounded-2xl px-6  shadow-none"
          >
            <AccordionTrigger className="text-base font-semibold text-primary text-left hover:no-underline pt-5">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground text-base leading-tight pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
