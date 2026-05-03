import Image from "next/image";
import { aboutUsPageContent } from "@/content/about.json";

export const WhoWeAre: React.FC = () => {
  const { whoWeAre } = aboutUsPageContent;

  return (
    <section
      id="about-who-we-are"
      aria-labelledby="who-we-are-heading"
      className="w-full px-50 py-25"
    >
      <div className="w-full flex gap-20 ">
        <div className="relative w-200 h-100 overflow-hidden rounded-3xl">
          <Image
            src={whoWeAre.assets_bannerImage.src}
            alt={whoWeAre.assets_bannerImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center max-w-3xl">
          <h2
            id="who-we-are-heading"
            className="text-3xl md:text-4xl font-semibold text-primary leading-tight max-w-xl"
          >
            {whoWeAre.heading}
          </h2>

          <div className="flex flex-col gap-5 mt-5">
            {whoWeAre.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-base text-muted-foreground leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
