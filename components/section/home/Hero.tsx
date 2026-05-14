"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homePageContent } from "@/content/home.json";
import { buttonVariants } from "@/components/ui/button";

import { DownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const iconMap = {
  download: DownloadIcon,
};

export const Hero: React.FC = () => {
  const { hero } = homePageContent;

  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="relative w-full flex flex-col min-h-screen justify-center"
    >
      <Image
        src={hero.assets_bannerImage.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        priority
        fill
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover select-none sm:rounded-br-[50px] md:rounded-br-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-md text-primary/70 uppercase tracking-normal font-semibold"
          aria-hidden="true"
        >
          {hero.badgeTitle}
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {hero.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-md font-normal tracking-normal text-muted-foreground leading-6"
        >
          {hero.description}
        </motion.p>

        <motion.nav
          aria-label="Hero call to action"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 mt-6"
        >
          {hero.ctas.map((cta, index) => {
            const isDownload = cta.link.endsWith(".pdf");

            const sharedClassName = buttonVariants({
              variant: cta.variant as keyof typeof buttonVariants,
              size: "xl",
              className: "w-fit md:w-auto",
            });

            const icon =
              cta.icon && iconMap[cta.icon as keyof typeof iconMap];

            return (
              <Link
                key={index}
                href={cta.link}
                download={isDownload}
                className={sharedClassName}
              >
                {icon && (
                  <HugeiconsIcon icon={icon} className="size-4" />
                )}
                {cta.label}
              </Link>
            );
          })}
        </motion.nav>
      </motion.div>
    </section>
  );
};