import { buttonVariants } from "@/components/ui/button";
import { servicesPageContent } from "@/content/services.json";
import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceOverviewProps {
  service: Service;
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  service,
}) => {
  return (
    <section
      id={`service-${service.slug}-overview`}
      aria-labelledby="service-overview-heading"
      className="w-full py-25 px-50 bg-white flex flex-col items-start"
    >
      <div className="flex flex-col gap-4">
        <p className="text-lg text-primary font-medium" aria-hidden="true">
          Overview
        </p>

        <h2
          id="service-overview-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          What is {service.title}?
        </h2>
      </div>

      <div className="flex flex-col gap-6 mt-3">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {service.overview}
        </p>

        <div className="flex items-center gap-4 pt-2">
          <Link
            href={service.cta.href}
            className={buttonVariants({
              variant: "default",
              size: "xl",
            })}
            aria-label={`${service.cta.label} for ${service.title}`}
          >
            {service.cta.label}
            <HugeiconsIcon icon={ArrowRight01FreeIcons} />
          </Link>
        </div>
      </div>
    </section>
  );
};
