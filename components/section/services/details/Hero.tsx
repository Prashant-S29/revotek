"use client";

import { motion, type Variants } from "framer-motion";

import { servicesPageContent } from "@/content/services.json";
import { BreadcrumbNav } from "@/components/common";

type Service = (typeof servicesPageContent.services)[number];

interface HeroProps {
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

export const Hero: React.FC<HeroProps> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-hero`}
      aria-labelledby="service-detail-hero-heading"
      className="relative w-full bg-brand-primary/10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 pt-40 md:pt-50 pb-25 flex flex-col items-center text-center"
      >
        <BreadcrumbNav
          items={[
            {
              label: "Services",
              href: "/services",
            },
            {
              label: service.title,
              href: `/services/${service.slug}`,
            },
          ]}
          className="mb-6"
        />

        <h1
          id="service-detail-hero-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary mt-5"
        >
          {service.hero.heading}
        </h1>

        <p className="mt-6 text-md font-normal tracking-normal text-muted-foreground leading-6 md:max-w-4xl">
          {service.hero.description}
        </p>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </section>
  );
};