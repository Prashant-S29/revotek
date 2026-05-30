"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutUsPageContent } from "@/content/about.json";

export const WhoWeAre: React.FC = () => {
  const { whoWeAre } = aboutUsPageContent;

  return (
    <section
      id="about-who-we-are"
      aria-labelledby="who-we-are-heading"
      className="w-full px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25 overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-20 gap-10">

        {/* Image Block Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative lg:w-300 lg:h-auto h-80 sm:h-100 w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={whoWeAre.assets_bannerImage.src}
            alt={whoWeAre.assets_bannerImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Content Block Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col justify-center w-full lg:max-w-3xl"
        >
          <h2
            id="who-we-are-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight text-brand-primary"
          >
            {whoWeAre.heading}
          </h2>

          <div className="flex flex-col gap-5 mt-5">
            {whoWeAre.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-base text-muted-foreground leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};