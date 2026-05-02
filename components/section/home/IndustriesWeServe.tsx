import { homePageContent } from "@/content/home.json";

export const IndustriesWeServe: React.FC = () => {
  const { industries } = homePageContent;

  return (
    <section
      id="home-industriesWeServe"
      aria-labelledby="industries-heading"
      className="px-50 py-25"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-brand-primary">{industries.badgeTitle}</p>
        <h2
          id="industries-heading"
          className="text-5xl text-primary mt-5 font-semibold"
        >
          {industries.heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-tight">
          {industries.description}
        </p>
      </div>

      <ul
        className="grid grid-cols-3 gap-5 mt-12 list-none p-0"
        aria-label="Industries we serve"
      >
        {industries.items.map((item, index) => (
          <li key={index}>
            <article className="h-full p-8 bg-gray-100 rounded-2xl flex flex-col gap-3">
              {/*
                Icon placeholder — swap with your actual icon per item
                if you add an icon field to the JSON later
              */}
              <div
                className="w-12 h-12 rounded-xl bg-brand-primary/15 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-brand-primary text-xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg text-primary font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
