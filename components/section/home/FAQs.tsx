"use client";

import { motion } from "framer-motion";

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
    <motion.section
      id="home-faqs"
      aria-labelledby="faq-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 sm:py-20 lg:py-25 bg-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Header */}
      <div className="text-center md:max-w-3xl mx-auto">
        <p className="text-md text-primary/70 uppercase tracking-normal font-semibold">
          {faq.badgeTitle}
        </p>

        <h2
          id="faq-heading"
          className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {faq.heading}
        </h2>

        <p className="mt-4 md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6">
          {faq.description}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-8 md:mt-12">
        <Accordion
          multiple
          className="max-w-4xl border-none mx-auto flex flex-col gap-3"
        >
          {faq.items.map((item, index) => (
            <div key={index}>
              <AccordionItem
                value={`faq-item-${index}`}
                className="bg-white data-open:bg-white rounded-2xl px-0 sm:px-3 md:px-6 shadow-none border-none"
              >
                <AccordionTrigger className="text-base font-semibold text-primary text-left hover:no-underline pt-5">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};