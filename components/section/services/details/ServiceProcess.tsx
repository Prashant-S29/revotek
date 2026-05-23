"use client";

import { motion, type Variants } from "framer-motion";

import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceProcessProps {
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

export const ServiceProcess: React.FC<ServiceProcessProps> = ({
  service,
}) => {
  return (
    <motion.section
      id={`service-${service.slug}-process`}
      aria-labelledby="service-process-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      {/* Header */}
      <div className="mb-14 md:max-w-2xl mx-auto text-center">
        <p
          aria-hidden="true"
          className="text-md text-primary/70 uppercase tracking-normal font-semibold mb-3"
        >
          Our Process
        </p>

        <h2
          id="service-process-heading"
          className="mb-2 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          How We Handle {service.title}
        </h2>

        <p className="mt-4 text-md font-normal tracking-normal text-muted-foreground leading-6">
          A structured, transparent process from first contact to final
          handover so you always know what to expect.
        </p>
      </div>

      {/* Process Cards */}
      <ol
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-px"
        aria-label={`${service.title} process steps`}
      >
        {service.process.map((step, index) => (
          <li
            key={index}
            className="bg-gray-100 px-5 py-8"
          >
            {/* Step Number */}
            <div
              className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-brand-primary text-xl font-bold">
                {index + 1}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-8 text-primary leading-snug min-h-[3rem] flex items-center">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-md text-muted-foreground mt-2">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </motion.section>
  );
};