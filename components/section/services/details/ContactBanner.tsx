"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ContactBannerProps {
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
      duration: 0.7,
    },
  },
};

export const ContactBanner: React.FC<ContactBannerProps> = ({
  service,
}) => {
  return (
    <section
      id={`service-${service.slug}-contact`}
      aria-labelledby="service-contact-heading"
      className="relative w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 bg-brand-primary/10 overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/10 z-0"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-primary/10 z-0"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 px-3 sm:px-6 md:px-16 lg:px-24 xl:px-30 2xl:px-50 flex flex-col items-center text-center"
      >
        <motion.h2
          variants={fadeUp}
          id="service-contact-heading"
          className="mb-5 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          Ready to Get Professional {service.title} in Gujarat?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mb-8 text-md font-normal tracking-normal text-muted-foreground leading-6"
        >
          Contact Revotek Elevators today. Our team in Ahmedabad is ready
          to assess your requirements and deliver a solution built for your
          building.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Link
            href={service.cta.href}
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}
            aria-label={`${service.cta.label} for ${service.title}`}
          >
            {service.cta.label}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};