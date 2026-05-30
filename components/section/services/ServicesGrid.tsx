"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { homePageContent } from "@/content/home.json";
import { servicesPageContent } from "@/content/services.json";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ServicesGrid: React.FC = () => {
  const { servicesGrid } = servicesPageContent;
  const { servicesOverview } = homePageContent;

  return (
    <section
      id="services-grid"
      aria-labelledby="services-grid-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 overflow-hidden"
    >
      {/* Header - No Animation */}
      <div className="mb-14 md:max-w-3xl">
        <h2
          id="services-grid-heading"
          className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
        >
          {servicesGrid.heading}
        </h2>

        <p className="mt-4 text-md font-normal tracking-normal text-muted-foreground leading-6 max-w-3xl">
          {servicesGrid.description}
        </p>
      </div>

      {/* Grid Animation Only */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border"
      >
        {servicesOverview.services.map((service, index) => (
          <article
            key={index}
            className="bg-white flex flex-col overflow-hidden p-6"
          >
            {/* Image */}
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image
                src={service.assets_bannerImage.src}
                alt={service.assets_bannerImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-4 py-6 px-1">
              <h3 className="text-xl font-semibold text-primary leading-snug">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Button */}
              <div>
                <Link
                  href={service.cta.href}
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "w-fit"
                  )}
                  aria-label={`${service.cta.label} about ${service.title}`}
                >
                  {service.cta.label}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};