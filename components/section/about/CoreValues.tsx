"use client";

import { motion } from "framer-motion";
import { aboutUsPageContent } from "@/content/about.json";

export const CoreValues: React.FC = () => {
  const { coreValues } = aboutUsPageContent;

  return (
    <motion.section
      id="about-core-values"
      aria-labelledby="core-values-heading"
      className="w-full py-15 lg:py-25 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 bg-gray-100 overflow-hidden"
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
          {coreValues.badgeTitle}
        </p>

        <h2
          id="core-values-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {coreValues.heading}
        </h2>

        <p className="mt-4 text-md font-normal tracking-normal text-muted-foreground leading-6">
          {coreValues.description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {coreValues.items.map((item, index) => (
          <div
            key={index}
            className="py-5 px-6 bg-white rounded-lg"
          >
            <h3 className="text-xl font-semibold text-primary">
              {item.title}
            </h3>

            <p className="text-md font-normal tracking-normal text-muted-foreground leading-6 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};