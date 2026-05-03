import { aboutUsPageContent } from "@/content/about.json";

export const CoreValues: React.FC = () => {
  const { coreValues } = aboutUsPageContent;

  return (
    <section
      id="about-core-values"
      aria-labelledby="core-values-heading"
      className="w-full py-25 px-50 bg-gray-100"
    >
      <div className="mb-14 max-w-2xl">
        <p className="text-lg text-primary font-medium mb-3" aria-hidden="true">
          {coreValues.badgeTitle}
        </p>
        <h2
          id="core-values-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          {coreValues.heading}
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {coreValues.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {coreValues.items.map((item, index) => (
          <div
            key={index}
            className="py-5 items-start bg-white transition-colors duration-300 px-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
            <p className="text-base mt-2 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
