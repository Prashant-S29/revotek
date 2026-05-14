"use client";

import { motion } from "framer-motion";
import { aboutUsPageContent } from "@/content/about.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
    },
  },
};

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = aboutUsPageContent;

  return (
    <motion.section
      id="about-why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="w-full py-15 lg:py-25 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="mb-14 md:max-w-xl"
      >
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
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200"
      >
        {whyChooseUs.items.map((item, index) => (
          <motion.article
            key={index}
            variants={fadeUp}
            whileHover={{
              transition: { duration: 0.2 },
            }}
            className="bg-white p-8 flex flex-col gap-4 cursor-pointer"
          >
            {/* Number */}
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-brand-primary text-xl font-bold">
                {index + 1}
              </span>
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-primary">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-md font-normal tracking-normal text-muted-foreground leading-6">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};