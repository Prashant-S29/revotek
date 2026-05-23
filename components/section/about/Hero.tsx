"use client";

import { motion } from "framer-motion";
import { aboutUsPageContent } from "@/content/about.json";

export const Hero: React.FC = () => {
  const { hero } = aboutUsPageContent;

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative w-full bg-brand-primary/10 overflow-hidden"
    >
      {/* Background shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/10 z-0"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/10 z-0"
      />

      {/* Content Block Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 pt-40 md:pt-50 pb-25 flex flex-col items-center text-center"
      >
        <h1
          id="about-hero-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {hero.heading}
        </h1>

        <p className="mt-4 text-sm md:text-md font-normal tracking-normal text-muted-foreground leading-6 md:max-w-2xl">
          {hero.description}
        </p>
      </motion.div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </section>
  );
};