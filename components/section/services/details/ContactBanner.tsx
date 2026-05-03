import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ContactBannerProps {
  service: Service;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-contact`}
      aria-labelledby="service-contact-heading"
      className="relative w-full py-25 px-50 bg-brand-primary/20 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/20 z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-primary/20 z-0"
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center text-center gap-8">
        <h2
          id="service-contact-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold  leading-tight max-w-3xl"
        >
          Ready to Get Professional {service.title} in Gujrat?
        </h2>

        <p className="text-lg  leading-relaxed max-w-xl">
          Contact Revotek Elevators today. Our team in Ahmedabad is ready to
          assess your requirements and deliver a solution built for your
          building.
        </p>

        <Link
          href={service.cta.href}
          className={buttonVariants({ variant: "default", size: "lg" })}
          aria-label={`${service.cta.label} for ${service.title}`}
        >
          {service.cta.label}
        </Link>
      </div>
    </section>
  );
};
