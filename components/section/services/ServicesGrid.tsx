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
      className="w-full py-25 px-50"
    >
      <div className="mb-14 max-w-2xl">
        <h2
          id="services-grid-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          {servicesGrid.heading}
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {servicesGrid.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border">
        {servicesOverview.services.map((service, index) => (
          <article
            key={index}
            className="group bg-white flex flex-col overflow-hidden p-6"
          >
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image
                src={service.assets_bannerImage.src}
                alt={service.assets_bannerImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover "
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 gap-4 py-6 px-1">
              <h3 className="text-xl font-semibold text-primary leading-snug">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              <Link
                href={service.cta.href}
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }),
                  "w-fit",
                )}
                aria-label={`${service.cta.label} about ${service.title}`}
              >
                {service.cta.label}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
