"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { homePageContent } from "@/content/home.json";

const containerVariants = {
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const FAQs: React.FC = () => {
  const { faq } = homePageContent;

  return (
    <motion.section
      id="home-faqs"
      aria-labelledby="faq-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 sm:py-20 lg:py-25 bg-gray-100 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="text-center md:max-w-3xl mx-auto"
      >
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
      </motion.div>

      {/* FAQ Items */}
      <motion.div
        variants={containerVariants}
        className="mt-8 md:mt-12"
      >
        <Accordion
          multiple
          className="max-w-4xl border-none mx-auto flex flex-col gap-3"
        >
          {faq.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
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
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};