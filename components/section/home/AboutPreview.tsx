"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { homePageContent } from "@/content/home.json";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CircleArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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

const staggerContainer = {
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
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AboutPreview: React.FC = () => {
  const { aboutPreview } = homePageContent;

  return (
    <section
      id="home-aboutPreview"
      aria-labelledby="about-preview-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 overflow-hidden py-15 lg:py-25 gap-14 lg:gap-20 flex flex-col-reverse lg:flex-row"
    >
      {/* Content */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          variants={fadeUp}
          className="text-md text-primary/70 uppercase tracking-normal font-semibold"
        >
          {aboutPreview.badgeTitle}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          id="about-preview-heading"
          className="mb-3 mt-3 text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {aboutPreview.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="lg:text-md md:text-sm font-normal tracking-normal text-muted-foreground leading-6"
        >
          {aboutPreview.description}
        </motion.p>

        {/* Highlights */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col mt-5 space-y-2"
          aria-label="Highlights"
        >
          {aboutPreview.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              whileHover={{ x: 8 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <HugeiconsIcon
                icon={CircleArrowRight02Icon}
                className="w-5 h-5 text-brand-primary flex-shrink-0"
              />

              <span className="lg:text-md md:text-sm font-normal tracking-normal text-black leading-6">
                {highlight}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href={aboutPreview.cta.link}
            className={cn(
              buttonVariants({
                variant: "brand",
                size: "lg",
              }),
              "mt-6"
            )}
          >
            {aboutPreview.cta.label}
          </Link>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
        className="relative w-full h-80 md:h-100 lg:w-100 xl:w-125 lg:h-auto shrink-0"
      >
        <Image
          src={aboutPreview.assets_bannerImage.src}
          alt={aboutPreview.assets_bannerImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
};