import Image from "next/image";
import { aboutUsPageContent } from "@/content/about.json";

export const Hero: React.FC = () => {
  const { hero } = aboutUsPageContent;

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative  px-50 w-full flex flex-col min-h-screen justify-center"
    >
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <p
            className="text-lg text-primary font-medium mb-4"
            aria-hidden="true"
          >
            {hero.badgeTitle}
          </p>

          <h1
            id="about-hero-heading"
            className="text-4xl md:text-5xl font-semibold text-primary leading-tight max-w-xl"
          >
            {hero.heading}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            {hero.description}
          </p>
        </div>

        <div className="relative w-full h-80 lg:h-120">
          <div
            aria-hidden="true"
            className="absolute -bottom-9 -right-8 w-full h-full bg-brand-primary/50 rounded-tl-[80px] rounded-br-[40px]"
          />
          <div className="absolute inset-0  overflow-hidden rounded-tl-[80px] rounded-br-[40px]">
            <Image
              src={hero.assets_bannerImage.src}
              alt={hero.assets_bannerImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
