import { servicesPageContent } from "@/content/services.json";

type Service = (typeof servicesPageContent.services)[number];

interface ServiceProcessProps {
  service: Service;
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ service }) => {
  return (
    <section
      id={`service-${service.slug}-process`}
      aria-labelledby="service-process-heading"
      className="w-full py-25 px-50 bg-gray-100"
    >
      <div className="mb-14 max-w-2xl">
        <p className="text-lg text-primary font-medium mb-3" aria-hidden="true">
          Our Process
        </p>
        <h2
          id="service-process-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          How We Handle {service.title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          A structured, transparent process from first contact to final handover
          so you always know what to expect.
        </p>
      </div>
      <ol
        className="relative grid grid-cols-3 bg-white gap-px "
        aria-label={`${service.title} process steps`}
      >
        {service.process.map((step, index) => (
          <li key={index} className="bg-gray-100 px-5 py-8">
            <div
              className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-brand-primary text-xl font-bold">
                {index + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold mt-8 text-primary leading-snug">
              {step.title}
            </h3>
            <p className="text-base text-muted-foreground mt-3">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
