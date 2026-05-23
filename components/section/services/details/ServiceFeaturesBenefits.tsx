"use client";

import { motion, type Variants } from "framer-motion";

import { servicesPageContent } from "@/content/services.json";

import { CircleArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceFeaturesBenefitsProps {
  service: Service;
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const ServiceFeaturesBenefits: React.FC<
  ServiceFeaturesBenefitsProps
> = ({ service }) => {
  return (
    <motion.section
      id={`service-${service.slug}-features-benefits`}
      aria-labelledby="service-features-benefits-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      {/* Header */}
      <div className="max-w-3xl">
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
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-12">
        
        {/* Features */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-primary">
            Key Features
          </h3>

          <ul
            className="flex flex-col gap-4"
            aria-label={`Key features of ${service.title}`}
          >
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <HugeiconsIcon
                  icon={CircleArrowRight02Icon}
                  className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1"
                />

                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-bold text-primary">
            Benefits
          </h3>

          <ul
            className="flex flex-col gap-4"
            aria-label={`Benefits of ${service.title}`}
          >
            {service.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <HugeiconsIcon
                  icon={CircleArrowRight02Icon}
                  className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1"
                />

                <p className="text-base text-primary/80 leading-relaxed">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.section>
  );
};