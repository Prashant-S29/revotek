import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceFAQsProps {
  service: Service;
}

export const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-faqs`}
      aria-labelledby="service-faqs-heading"
      className="w-full py-25 px-50 bg-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-primary font-medium" aria-hidden="true">
            FAQs
          </p>
          <h2
            id="service-faqs-heading"
            className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
          >
            Common Questions About {service.title}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion
          multiple
          className="flex flex-col gap-3 border-none"
          aria-label={`Frequently asked questions about ${service.title}`}
        >
          {service.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-item-${index}`}
              className="bg-white data-open:bg-white rounded-2xl px-6 shadow-none"
            >
              <AccordionTrigger className="text-base font-semibold text-primary text-left hover:no-underline pt-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
