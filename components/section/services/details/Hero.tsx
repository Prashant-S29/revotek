import { servicesPageContent } from "@/content/services.json";
import { BreadcrumbNav } from "@/components/common";

type Service = (typeof servicesPageContent.services)[number];

interface HeroProps {
  service: Service;
}

export const Hero: React.FC<HeroProps> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-hero`}
      aria-labelledby="service-detail-hero-heading"
      className="relative w-full bg-brand-primary/20 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/20 z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/20 z-0"
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 pt-50 pb-25 flex flex-col items-center text-center">
        <BreadcrumbNav
          items={[
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
          className="mb-6"
        />

        <p className="text-lg text-primary font-medium mb-4" aria-hidden="true">
          {service.hero.badgeTitle}
        </p>

        <h1
          id="service-detail-hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mt-2 max-w-4xl"
        >
          {service.hero.heading}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {service.hero.description}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </section>
  );
};
