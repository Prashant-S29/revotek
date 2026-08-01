"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { VariantProps } from "class-variance-authority";
import { homePageContent } from "@/content/home.json";
import { buttonVariants } from "@/components/ui/button";

import { DownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const iconMap = {
  download: DownloadIcon,
};

type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

const heroSlides = [
  {
    src: "/assets/01.webp",
    alt: "Modern glass elevator cabin in a commercial building",
  },
  {
    src: "/assets/02.webp",
    alt: "Technician servicing an elevator control panel",
  },
  {
    src: "/assets/03.webp",
    alt: "High-rise panoramic elevator shaft",
  },
  {
    src: "/assets/04.webp",
    alt: "Elevator machine room with modern equipment",
  },
];

const SLIDE_DURATION = 4000; // ms

const HeroImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[400px] mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[activeIndex].src}
            alt={heroSlides[activeIndex].alt}
            fill
            loading="eager"
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-950/10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-brand-primary"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { hero } = homePageContent;

  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="relative w-full flex items-center justify-center min-h-screen overflow-hidden bg-slate-950 py-20 lg:py-25"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_85%_0%,rgba(30,64,175,0.38)_0%,rgba(15,42,100,0.28)_42%,rgba(2,6,23,0)_78%)]"
      />

      <div className="relative z-10 w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-25">
        {/* Left column: existing text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="lg:max-w-xl order-2 lg:order-1"
        >
          <p className="text-md text-white uppercase tracking-normal font-semibold">
            {hero.badgeTitle}
          </p>

          <h1
            id="hero-heading"
            className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-[#31aadd]"
          >
            {hero.heading}
          </h1>

          <p className="text-md font-thin tracking-normal text-white/70 leading-6">
            {hero.description}
          </p>

          <nav
            aria-label="Hero call to action"
            className="flex flex-col sm:flex-row gap-3 mt-6"
          >
            {hero.ctas.map((cta, index) => {
              const isDownload = cta.link.endsWith(".pdf");

              const sharedClassName = buttonVariants({
                variant: cta.variant as ButtonVariant,
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
          </nav>

          <dl
            aria-label="Customer statistics"
            className="mt-8 flex w-fit items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
          >
            {hero.customerStats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index === 0
                    ? "pr-5 sm:pr-8"
                    : "border-l border-white/15 pl-5 sm:pl-8"
                }
              >
                <dd className="text-2xl font-bold leading-none text-brand-primary sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-xs font-medium text-white/65 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right column: auto-changing image slider */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.15,
          }}
        >
          <HeroImageSlider />
        </motion.div>
      </div>
    </section>
  );
};
