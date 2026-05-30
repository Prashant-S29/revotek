"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { homePageContent } from "@/content/home.json";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CircleArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const AboutPreview: React.FC = () => {
  const { aboutPreview } = homePageContent;

  return (
    <section
      id="home-aboutPreview"
      aria-labelledby="about-preview-heading"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 overflow-hidden py-15 lg:py-25 gap-14 lg:gap-20 flex flex-col-reverse lg:flex-row"
    >
      {/* Content Block Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p className="text-md text-primary/70 uppercase tracking-normal font-semibold">
          {aboutPreview.badgeTitle}
        </p>

        <h2
          id="about-preview-heading"
          className="mb-3 mt-3 text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {aboutPreview.heading}
        </h2>

        <p className="lg:text-md md:text-sm font-normal tracking-normal text-muted-foreground leading-6">
          {aboutPreview.description}
        </p>

        {/* Highlights */}
        <ul
          className="flex flex-col mt-5 space-y-2"
          aria-label="Highlights"
        >
          {aboutPreview.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-center gap-2"
            >
              <HugeiconsIcon
                icon={CircleArrowRight02Icon}
                className="w-5 h-5 text-brand-primary flex-shrink-0"
              />

              <span className="lg:text-md md:text-sm font-normal tracking-normal text-black leading-6">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div>
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
        </div>
      </motion.div>

      {/* Image Block Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
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