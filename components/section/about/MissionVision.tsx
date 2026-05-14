"use client";

import { motion } from "framer-motion";
import { aboutUsPageContent } from "@/content/about.json";

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

export const MissionVision: React.FC = () => {
  const { missionVision } = aboutUsPageContent;

  return (
    <section
      id="about-mission-vision"
      aria-labelledby="mission-vision-heading"
      className="w-full py-15 lg:py-25 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 bg-gray-100"
    >
      <div>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <p
            aria-hidden="true"
            className="text-md text-primary/70 uppercase tracking-normal font-semibold mb-3"
          >
            {missionVision.badgeTitle}
          </p>

          <h2
            id="mission-vision-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
          >
            What Drives Us Every Day
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-tl-[60px] rounded-br-[60px]">

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="bg-white px-5 py-8 sm:px-10 sm:py-14 flex flex-col gap-6 cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 10,
              }}
              aria-hidden="true"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-primary" />
            </motion.div>

            <h3 className="text-2xl font-bold text-primary">
              {missionVision.mission.heading}
            </h3>

            <p className="text-base font-normal tracking-normal text-muted-foreground leading-6">
              {missionVision.mission.description}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="bg-primary px-5 py-8 sm:px-10 sm:py-14 flex flex-col gap-6 cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: -10,
              }}
              aria-hidden="true"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-white" />
            </motion.div>

            <h3 className="text-2xl font-semibold text-white">
              {missionVision.vision.heading}
            </h3>

            <p className="text-base font-normal tracking-normal text-white/80 leading-6">
              {missionVision.vision.description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};