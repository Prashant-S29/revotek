"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutUsPageContent } from "@/content/about.json";

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

export const WhoWeAre: React.FC = () => {
  const { whoWeAre } = aboutUsPageContent;

  return (
    <section
      id="about-who-we-are"
      aria-labelledby="who-we-are-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-20 gap-10">

        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
          className="relative lg:w-300 lg:h-auto h-80 sm:h-100 w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={whoWeAre.assets_bannerImage.src}
            alt={whoWeAre.assets_bannerImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center w-full lg:max-w-3xl"
        >
          <motion.h2
            variants={fadeRight}
            id="who-we-are-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
          >
            {whoWeAre.heading}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-5 mt-5"
          >
            {whoWeAre.paragraphs.map((para, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-base text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};