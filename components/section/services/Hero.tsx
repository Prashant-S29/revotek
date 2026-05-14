"use client";

import { motion } from "framer-motion";

import { BreadcrumbNav } from "@/components/common";
import { servicesPageContent } from "@/content/services.json";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const Hero: React.FC = () => {
  const { hero } = servicesPageContent;

  return (
    <section
      id="services-hero"
      aria-labelledby="services-hero-heading"
      className="relative w-full bg-brand-primary/10 overflow-hidden"
    >
      {/* Floating shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/10 z-0"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/10 z-0"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 pt-40 md:pt-50 pb-25 flex flex-col items-center text-center"
      >
        <motion.div variants={fadeUp}>
          <BreadcrumbNav
            items={[{ label: "Services", href: "/services" }]}
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          id="services-hero-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary mt-5"
        >
          {hero.heading}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 text-md font-normal tracking-normal text-muted-foreground leading-6 md:max-w-2xl"
        >
          {hero.description}
        </motion.p>
      </motion.div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </section>
  );
};