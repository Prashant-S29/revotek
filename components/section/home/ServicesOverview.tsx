"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { homePageContent } from "@/content/home.json";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const ServicesOverview: React.FC = () => {
  return (
    <motion.div
      id="home-servicesOverview"
      className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 mb-20 lg:mb-30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="w-full flex flex-col px-3 py-5 sm:p-10 bg-brand-primary/10 relative overflow-hidden rounded-4xl">

        {/* Background shapes */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/10 z-0"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/10 z-0"
        />

        {/* Badge */}
        <h5 className="text-md text-primary/70 uppercase tracking-normal font-semibold relative z-10">
          {homePageContent.servicesOverview.badgeTitle}
        </h5>

        {/* Header */}
        <section className="flex flex-col lg:flex-row justify-between relative z-10 items-start">

          <div className="lg:max-w-3xl w-full mb-4 md:mb-0">
            <h1 className="mb-3 mt-3 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary">
              {homePageContent.servicesOverview.heading}
            </h1>

            <p className="mt-4 md:text-sm lg:text-md font-normal tracking-normal text-muted-foreground leading-6 max-w-3xl">
              {homePageContent.servicesOverview.description}
            </p>
          </div>

          <div>
            <Link
              href={homePageContent.servicesOverview.cta.link}
              className={buttonVariants({
                variant: "brand",
                size: "xl",
              })}
            >
              {homePageContent.servicesOverview.cta.label}
            </Link>
          </div>
        </section>

        {/* Cards */}
        <section className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {homePageContent.servicesOverview.services.map(
            (service, index) => (
              <div
                key={index}
                className="w-full p-3 bg-white flex flex-col justify-between rounded-xl shadow-sm"
              >
                <section>
                  <Image
                    src={service.assets_bannerImage.src}
                    alt={service.assets_bannerImage.alt}
                    width={500}
                    height={400}
                    className="h-60 w-full object-cover rounded-lg"
                  />

                  <h5 className="text-lg text-primary font-semibold mt-2 pl-1 min-h-[3rem] flex items-center">
                    {service.title}
                  </h5>

                  <p className="text-[16px] text-muted-foreground mt-1 mb-3 pl-1 leading-tight line-clamp-2">
                    {service.description}
                  </p>
                </section>

                <div>
                  <Link
                    href={service.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "lg",
                      }),
                      "w-fit"
                    )}
                  >
                    {service.cta.label}
                  </Link>
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </motion.div>
  );
};