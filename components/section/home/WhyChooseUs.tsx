"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homePageContent } from "@/content/home.json";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
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
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

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
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = homePageContent;

  return (
    <section
      id="home-whyChooseUs"
      aria-labelledby="why-choose-heading"
      className="overflow-hidden px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 gap-14 flex flex-col lg:flex-row bg-gray-100"
    >
      {/* Image */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
      >
        <Image
          src={whyChooseUs.assets_bannerImage.src}
          alt={whyChooseUs.assets_bannerImage.alt}
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 500px"
          className="lg:w-150 lg:h-full object-cover w-full h-120 pt-15 lg:pt-0"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pb-15 lg:py-25"
      >
        <motion.p
          variants={fadeUp}
          className="text-md text-primary/70 uppercase tracking-normal font-semibold"
        >
          {whyChooseUs.badgeTitle}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          id="why-choose-heading"
          className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {whyChooseUs.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-2 md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6"
        >
          {whyChooseUs.description}
        </motion.p>

        {/* Feature items */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 list-none p-0"
          aria-label="Reasons to choose us"
        >
          {whyChooseUs.items.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="cursor-pointer"
            >
              <h3 className="md:text-sm lg:text-lg font-semibold mb-1 pb-1 border-b-2 border-gray-300">
                {item.title}
              </h3>

              <p className="text-muted-foreground md:text-sm lg:text-md mt-1">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};