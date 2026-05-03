import { aboutUsPageContent } from "@/content/about.json";

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = aboutUsPageContent;

  return (
    <section
      id="about-why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="w-full py-25 px-50 bg-white"
    >
      <div className="mb-14 max-w-2xl">
        <p className="text-lg text-primary font-medium mb-3" aria-hidden="true">
          {whyChooseUs.badgeTitle}
        </p>
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-semibold text-primary leading-tight"
        >
          {whyChooseUs.heading}
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {whyChooseUs.description}
        </p>
      </div>

      <div className="grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {whyChooseUs.items.map((item, index) => (
          <article
            key={index}
            className="bg-white p-8 flex flex-col gap-4 group  transition-colors duration-300"
          >
            <div
              className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-brand-primary text-xl font-bold">
                {index + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
