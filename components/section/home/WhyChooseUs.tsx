import Image from "next/image";
import { homePageContent } from "@/content/home.json";

export const WhyChooseUs: React.FC = () => {
  const { whyChooseUs } = homePageContent;

  return (
    <section
      id="home-whyChooseUs"
      aria-labelledby="why-choose-heading"
      className="px-50 gap-20 flex bg-gray-100"
    >
      <Image
        src={whyChooseUs.assets_bannerImage.src}
        alt={whyChooseUs.assets_bannerImage.alt}
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, 500px"
        className="w-100 h-auto"
      />

      <div className="py-25">
        <p className="text-lg text-brand-primary">{whyChooseUs.badgeTitle}</p>
        <h2
          id="why-choose-heading"
          className="text-5xl text-primary max-w-3xl mt-5 font-semibold"
        >
          {whyChooseUs.heading}
        </h2>

        <p className="mt-2 text-lg text-muted-foreground leading-tight max-w-3xl">
          {whyChooseUs.description}
        </p>

        <ul
          className="grid grid-cols-2 gap-8 mt-8 list-none p-0"
          aria-label="Reasons to choose us"
        >
          {whyChooseUs.items.map((item, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
