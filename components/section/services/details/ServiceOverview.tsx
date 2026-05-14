"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { servicesPageContent } from "@/content/services.json";

import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceOverviewProps {
  service: Service;
}

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
      duration: 0.6,
    },
  },
};

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  service,
}) => {
  return (
    <motion.section
      id={`service-${service.slug}-overview`}
      aria-labelledby="service-overview-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-white flex flex-col items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-4"
      >
        <p
          aria-hidden="true"
          className="text-md text-primary/70 uppercase tracking-normal font-semibold"
        >
          Overview
        </p>

        <h2
          id="service-overview-heading"
          className="mb-2 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          What is {service.title}?
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-6 mt-3"
      >
        <motion.p
          variants={fadeUp}
          className="text-md text-justify font-normal tracking-normal text-muted-foreground leading-6"
        >
          {service.overview}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 pt-2"
        >
          <Link
            href={service.cta.href}
            className={buttonVariants({
              variant: "default",
              size: "xl",
            })}
            aria-label={`${service.cta.label} for ${service.title}`}
          >
            {service.cta.label}

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <HugeiconsIcon icon={ArrowRight01FreeIcons} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};