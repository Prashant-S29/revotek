import { contactPageContent } from "@/content/contact.json";

export const Hero: React.FC = () => {
  const { hero } = contactPageContent;

  return (
    <section
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
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
        <h1
          id="contact-hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mt-6 max-w-4xl"
        >
          {hero.heading}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {hero.description}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
    </section>
  );
};
