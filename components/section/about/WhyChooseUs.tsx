"use client";

import { motion } from "framer-motion";
import { aboutUsPageContent } from "@/content/about.json";

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = aboutUsPageContent;

  return (
    <motion.section
      id="about-why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="w-full py-15 lg:py-25 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Header */}
      <div className="mb-14 md:max-w-xl">
        <p
          aria-hidden="true"
          className="text-md text-primary/70 uppercase tracking-normal font-semibold mb-3"
        >
          {whyChooseUs.badgeTitle}
        </p>

        <h2
          id="why-choose-us-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {whyChooseUs.heading}
        </h2>

        <p className="mt-4 text-md font-normal tracking-normal text-muted-foreground leading-6">
          {whyChooseUs.description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {whyChooseUs.items.map((item, index) => (
          <article
            key={index}
            className="bg-white p-8 flex flex-col gap-4"
          >
            {/* Number */}
            <div
              className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-brand-primary text-xl font-bold">
                {index + 1}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-primary">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-md font-normal tracking-normal text-muted-foreground leading-6">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
};