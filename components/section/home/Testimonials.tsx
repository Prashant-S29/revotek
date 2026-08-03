"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { homePageContent } from "@/content/home.json";

const getPosition = (index: number, active: number, count: number) => {
  if (index === active) return "active";
  if (index === (active - 1 + count) % count) return "previous";
  if (index === (active + 1) % count) return "next";
  return "hidden";
};

const Arrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
    <path
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Testimonials: React.FC = () => {
  const { testimonials } = homePageContent;
  const [activeIndex, setActiveIndex] = useState(1);
  const itemCount = testimonials.items.length;
  const isSliderEnabled = itemCount >= 4;
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + itemCount) % itemCount);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % itemCount);

  return (
    <motion.section
      id="home-testimonials"
      aria-labelledby="testimonials-heading"
      aria-roledescription={isSliderEnabled ? "carousel" : undefined}
      className="overflow-hidden bg-white px-3 pt-5 pb-15 sm:px-6 sm:py-20 md:px-10 lg:px-10 lg:pt-5 lg:pb-25 xl:px-30 2xl:px-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onKeyDown={(event) => {
        if (!isSliderEnabled) return;
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
    >
      <header className="mx-auto flex max-w-[92rem] flex-col gap-6 sm:gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-md font-semibold uppercase tracking-normal text-primary/70">
            {testimonials.badgeTitle}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-primary sm:text-4xl lg:text-4xl"
          >
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-md font-normal leading-6 tracking-normal text-muted-foreground">
            {testimonials.description}
          </p>
        </div>

        {isSliderEnabled && (
          <div className="flex shrink-0 self-end gap-3" role="group" aria-label="Testimonial slider controls">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white text-primary transition hover:border-brand-primary hover:text-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
              className="flex size-10 items-center justify-center rounded-full bg-brand-primary text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              <Arrow direction="right" />
            </button>
          </div>
        )}
      </header>

      <div
        className={[
          "mx-auto mt-9 grid max-w-[92rem] grid-cols-1 items-stretch gap-4 sm:mt-10 sm:gap-5 lg:mt-12",
          isSliderEnabled
            ? "min-h-[18rem] sm:grid-cols-2 sm:min-h-[20rem] lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-3",
        ].join(" ")}
      >
        {testimonials.items.map((item, itemIndex) => {
          const position = isSliderEnabled
            ? getPosition(itemIndex, activeIndex, itemCount)
            : "static";

          return (
            <figure
              key={`${item.name}-${item.location}`}
              aria-label={`${itemIndex + 1} of ${itemCount}: ${item.name}`}
              aria-hidden={isSliderEnabled && position === "hidden" ? true : undefined}
              className={[
                "flex min-h-[18rem] flex-col rounded-2xl border border-gray-300 bg-white p-5 transition-all duration-500 sm:min-h-[20rem] sm:rounded-[1.75rem] sm:p-7 xl:p-8",
                isSliderEnabled ? "col-start-1 row-start-1" : "",
                isSliderEnabled && position === "active" ? "z-20 opacity-100 shadow-sm sm:col-start-2 lg:col-start-2" : "",
                isSliderEnabled && position === "previous" ? "z-10 hidden opacity-100 sm:col-start-1 sm:flex" : "",
                isSliderEnabled && position === "next" ? "z-10 hidden opacity-100 lg:col-start-3 lg:flex" : "",
                isSliderEnabled && position === "hidden" ? "pointer-events-none hidden" : "",
              ].join(" ")}
            >
            <div
              className="flex gap-1 text-2xl leading-none text-amber-500"
              role="img"
              aria-label={`${item.rating} out of 5 stars`}
            >
              {Array.from({ length: item.rating }, (_, index) => (
                <span key={index} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>

            <blockquote className="mt-4 flex-1 text-base italic leading-7 text-primary sm:mt-5 sm:text-lg">
              “{item.quote}”
            </blockquote>

            <figcaption className="mt-6 border-t border-gray-300 pt-5 sm:mt-8 sm:pt-6">
              <cite className="text-base font-semibold not-italic text-primary sm:text-lg">
                {item.name}, {item.location}
              </cite>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                {item.service}
              </p>
            </figcaption>
            </figure>
          );
        })}
      </div>

      {isSliderEnabled && (
        <>
          <div
            className="mt-8 flex justify-center gap-3"
            role="group"
            aria-label="Choose a testimonial"
          >
            {testimonials.items.map((item, itemIndex) => (
              <button
                key={`${item.name}-${item.location}`}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                aria-current={activeIndex === itemIndex ? "true" : undefined}
                onClick={() => setActiveIndex(itemIndex)}
                className={[
                  "size-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary",
                  activeIndex === itemIndex
                    ? "scale-125 bg-brand-primary"
                    : "bg-gray-300 hover:bg-gray-400",
                ].join(" ")}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing testimonial {activeIndex + 1} of {itemCount}
          </p>
        </>
      )}
    </motion.section>
  );
};
