"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { homePageContent } from "@/content/home.json";
import { buttonVariants } from "@/components/ui/button";

import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappFreeIcons } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";

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

export const ContactBanner: React.FC = () => {
  const { ctaContact } = homePageContent;

  return (
    <section
      id="home-contactBanner"
      aria-labelledby="contact-banner-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full bg-brand-primary/10 relative overflow-hidden rounded-4xl lg:px-20 lg:py-16 md:px-10 md:py-10 px-3 py-5 flex-col flex items-center"
      >
        {/* Floating background shapes */}
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
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/10 z-0"
        />

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="contact-banner-heading"
          className="relative z-10 mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary text-center"
        >
          {ctaContact.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mt-4 md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6 max-w-3xl mx-auto text-center"
        >
          {ctaContact.description}
        </motion.p>

        {/* CTA */}
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Contact call to action"
          className="relative z-10 flex gap-4 mt-8 shrink-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href={ctaContact.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "brand",
                  size: "xl",
                }),
                "bg-green-500 hover:bg-green-500/90"
              )}
            >
              <HugeiconsIcon
                icon={WhatsappFreeIcons}
                className="size-5"
              />
              {ctaContact.cta.label}
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </section>
  );
};