"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutUsPageContent } from "@/content/about.json";

const getPosition = (index: number, active: number, count: number) => {
  const distance = (index - active + count) % count;

  if (distance === 0) return "active";
  if (distance === 1) return "next";
  if (distance === 2) return "far-next";
  if (distance === count - 1) return "previous";
  if (distance === count - 2) return "far-previous";
  return "hidden";
};

const Arrow = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className={`size-5 transition-transform duration-200 ${
      direction === "left"
        ? "group-hover:-translate-x-0.5"
        : "group-hover:translate-x-0.5"
    }`}
  >
    <path
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Team: React.FC = () => {
  const { team } = aboutUsPageContent;
  const [activeIndex, setActiveIndex] = useState(1);
  const itemCount = team.items.length;
  const isSliderEnabled = itemCount >= 4;
  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + itemCount) % itemCount);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % itemCount);

  return (
    <section
      id="about-team"
      role="region"
      aria-labelledby="team-heading"
      aria-roledescription={isSliderEnabled ? "carousel" : undefined}
      className="relative isolate w-full overflow-hidden bg-white px-3 pb-15 pt-5 sm:px-6 md:px-10 lg:px-10 lg:pt-5 lg:pb-25 xl:px-30 2xl:px-50"
      onKeyDown={(event) => {
        if (!isSliderEnabled) return;
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_75%,rgba(11,146,195,0.12),transparent_27%)]" />

      <header className="mx-auto flex max-w-[80rem] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl text-left">
          <p className="text-md font-semibold uppercase tracking-normal text-primary/70">{team.badgeTitle}</p>
          <h2 id="team-heading" className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-primary sm:text-4xl lg:text-4xl">{team.heading}</h2>
          <p className="mt-5 max-w-3xl text-md font-normal leading-6 tracking-normal text-muted-foreground">{team.description}</p>
        </div>

        {isSliderEnabled && (
        <div className="flex shrink-0 self-end gap-3 sm:self-auto" role="group" aria-label="Team slider controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous specialist team"
            className="group flex size-11 items-center justify-center rounded-full border border-brand-primary/25 bg-white text-brand-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-md active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next specialist team"
            className="group flex size-11 items-center justify-center rounded-full border border-brand-primary bg-brand-primary text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-primary hover:shadow-md active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            <Arrow direction="right" />
          </button>
        </div>
        )}
      </header>

      <div className="relative mx-auto mt-10 max-w-[82rem]">
        <div
          className={
            isSliderEnabled
              ? [
                  "grid min-h-[24rem] grid-cols-1 items-center gap-4 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.08fr)_minmax(0,0.88fr)] lg:min-h-[25rem]",
                  itemCount === 4
                    ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.08fr)_minmax(0,0.92fr)_minmax(0,0.8fr)]"
                    : "lg:grid-cols-[minmax(0,0.78fr)_minmax(0,0.92fr)_minmax(0,1.08fr)_minmax(0,0.92fr)_minmax(0,0.78fr)]",
                ].join(" ")
              : [
                  "mx-auto grid min-h-0 grid-cols-1 gap-5",
                  itemCount === 1 ? "max-w-md" : "",
                  itemCount === 2 ? "max-w-4xl sm:grid-cols-2" : "",
                  itemCount === 3 ? "max-w-6xl sm:grid-cols-2 md:grid-cols-3" : "",
                ].join(" ")
          }
        >
          {team.items.map((item, index) => {
            const position = isSliderEnabled
              ? getPosition(index, activeIndex, itemCount)
              : "static";

            return (
              <article
                key={item.title}
                aria-label={`${index + 1} of ${itemCount}: ${item.title}`}
                aria-hidden={isSliderEnabled && position === "hidden" ? true : undefined}
                className={[
                  "group relative h-[24rem] overflow-hidden rounded-[1.35rem] bg-primary transition-all duration-500 ease-out",
                  isSliderEnabled ? "col-start-1 row-start-1 md:row-start-1 lg:h-[25rem]" : "w-full shadow-lg",
                  isSliderEnabled && position === "active" ? `z-20 opacity-100 shadow-[0_24px_45px_-25px_rgba(15,23,42,0.45)] md:col-start-2 ${itemCount === 4 ? "lg:col-start-2" : "lg:col-start-3"}` : "",
                  isSliderEnabled && position === "previous" ? `z-10 hidden opacity-70 md:col-start-1 md:block md:h-[22.5rem] ${itemCount === 4 ? "lg:col-start-1" : "lg:col-start-2"} lg:h-[23.5rem]` : "",
                  isSliderEnabled && position === "next" ? `z-10 hidden opacity-70 md:col-start-3 md:block md:h-[22.5rem] ${itemCount === 4 ? "lg:col-start-3" : "lg:col-start-4"} lg:h-[23.5rem]` : "",
                  isSliderEnabled && position === "far-previous" ? "z-0 hidden opacity-45 lg:col-start-1 lg:block lg:h-[22rem]" : "",
                  isSliderEnabled && position === "far-next" ? `z-0 hidden opacity-45 lg:block lg:h-[22rem] ${itemCount === 4 ? "lg:col-start-4" : "lg:col-start-5"}` : "",
                  isSliderEnabled && position === "hidden" ? "pointer-events-none hidden" : "",
                ].join(" ")}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={
                    !isSliderEnabled
                      ? itemCount === 1
                        ? "(max-width: 767px) 94vw, 28rem"
                        : "(max-width: 1023px) 48vw, 32vw"
                      : position === "active"
                        ? "(max-width: 767px) 94vw, (max-width: 1023px) 36vw, 22vw"
                        : "(max-width: 1023px) 28vw, 18vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                {isSliderEnabled && position !== "active" && <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight xl:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand-primary xl:text-base">{item.specialty}</p>
                  <p className="sr-only">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {isSliderEnabled && (
        <>
          <div className="mt-8 flex justify-center gap-3" role="group" aria-label="Choose a specialist team">
            {team.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={[
                  "size-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary",
                  activeIndex === index ? "scale-125 bg-brand-primary" : "bg-gray-300 hover:bg-gray-400",
                ].join(" ")}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Showing {team.items[activeIndex].title}, {activeIndex + 1} of {itemCount}
          </p>
        </>
      )}
    </section>
  );
};
