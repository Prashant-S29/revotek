import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceFeaturesBenefitsProps {
  service: Service;
}

export const ServiceFeaturesBenefits: React.FC<
  ServiceFeaturesBenefitsProps
> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-features-benefits`}
      aria-labelledby="service-features-benefits-heading"
      className="w-full py-25 px-50 bg-white"
    >
      <div className="max-w-2xl">
        <p className="text-lg text-primary font-medium mb-3" aria-hidden="true">
          Why It Matters
        </p>
        <h2
          id="service-features-benefits-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          Features & Benefits of Our {service.title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Everything included in our service and what it means for your building
          and its occupants.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-8  lg:grid-cols-2">
        <div className="bg-white  flex flex-col gap-5">
          <h3 className="text-xl font-semibold text-primary">Key Features</h3>

          <ul
            className="flex flex-col gap-4 pl-4"
            aria-label={`Key features of ${service.title}`}
          >
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white  flex flex-col gap-5">
          <h3 className="text-xl font-semibold ">Benefits</h3>

          <ul
            className="flex flex-col gap-4 pl-4"
            aria-label={`Benefits of ${service.title}`}
          >
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-base text-primary/80 leading-relaxed">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
