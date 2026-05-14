"use client";

import { motion } from "framer-motion";

import { servicesPageContent } from "@/content/services.json";

import { CircleArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceFeaturesBenefitsProps {
  service: Service;
}

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
    x: -40,
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
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const ServiceFeaturesBenefits: React.FC<
  ServiceFeaturesBenefitsProps
> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-features-benefits`}
      aria-labelledby="service-features-benefits-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-white"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-3xl"
      >
        <p
          aria-hidden="true"
          className="text-md text-primary/70 uppercase tracking-normal font-semibold mb-3"
        >
          Why It Matters
        </p>

        <h2
          id="service-features-benefits-heading"
          className="mb-2 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          Features & Benefits of Our {service.title}
        </h2>

        <p className="mt-4 text-md font-normal tracking-normal text-muted-foreground leading-6">
          Everything included in our service and what it means for your
          building and its occupants.
        </p>
      </motion.div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-12">

        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="flex flex-col gap-5"
        >
          <h3 className="text-xl font-bold text-primary">
            Key Features
          </h3>

          <motion.ul
            variants={listContainer}
            className="flex flex-col gap-4"
            aria-label={`Key features of ${service.title}`}
          >
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{
                    x: 4,
                    scale: 1.1,
                  }}
                >
                  <HugeiconsIcon
                    icon={CircleArrowRight02Icon}
                    className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1"
                  />
                </motion.div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          className="flex flex-col gap-5"
        >
          <h3 className="text-xl font-bold text-primary">
            Benefits
          </h3>

          <motion.ul
            variants={listContainer}
            className="flex flex-col gap-4"
            aria-label={`Benefits of ${service.title}`}
          >
            {service.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{
                    x: 4,
                    scale: 1.1,
                  }}
                >
                  <HugeiconsIcon
                    icon={CircleArrowRight02Icon}
                    className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1"
                  />
                </motion.div>

                <p className="text-base text-primary/80 leading-relaxed">
                  {benefit}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </div>
    </section>
  );
};