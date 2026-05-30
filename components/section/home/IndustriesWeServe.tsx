"use client";

import { motion } from "framer-motion";
import { homePageContent } from "@/content/home.json";

export const IndustriesWeServe: React.FC = () => {
  const { industries } = homePageContent;

  return (
    <motion.section
      id="home-industriesWeServe"
      aria-labelledby="industries-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 pb-15 sm:pb-25 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Heading */}
      <div className="text-center md:max-w-3xl mx-auto">
        <p className="text-md text-primary/70 uppercase tracking-normal font-semibold">
          {industries.badgeTitle}
        </p>

        <h2
          id="industries-heading"
          className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {industries.heading}
        </h2>

        <p className="mt-4 md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6 md:max-w-3xl">
          {industries.description}
        </p>
      </div>

      {/* Cards */}
      <ul
        className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0"
        aria-label="Industries we serve"
      >
        {industries.items.map((item, index) => (
          <li key={index}>
            <article className="h-full p-5 sm:p-8 bg-gray-100 rounded-2xl flex flex-col gap-3">

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
              <h3 className="text-lg text-primary font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground md:text-sm lg:text-md leading-relaxed">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};