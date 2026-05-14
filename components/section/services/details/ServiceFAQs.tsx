"use client";

import { motion } from "framer-motion";

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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const ServiceFAQs: React.FC<ServiceFAQsProps> = ({
  service,
}) => {
  return (
    <section
      id={`service-${service.slug}-faqs`}
      aria-labelledby="service-faqs-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="flex flex-col"
        >
          <p
            aria-hidden="true"
            className="text-md text-primary/70 uppercase tracking-normal font-semibold mb-3"
          >
            FAQs
          </p>

          <h2
            id="service-faqs-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary mb-3"
          >
            Common Questions About {service.title}
          </h2>

          <p className="text-base font-normal tracking-normal text-muted-foreground leading-6">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <motion.div variants={staggerContainer}>
            <Accordion
              multiple
              className="flex flex-col gap-3 border-none"
              aria-label={`Frequently asked questions about ${service.title}`}
            >
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -3,
                  }}
                >
                  <AccordionItem
                    value={`faq-item-${index}`}
                    className="bg-white data-open:bg-white rounded-2xl px-0 sm:px-3 md:px-6 shadow-none"
                  >
                    <AccordionTrigger className="text-base font-semibold text-primary text-left hover:no-underline pt-5">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};