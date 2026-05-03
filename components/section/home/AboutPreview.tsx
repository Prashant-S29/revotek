import Image from "next/image";
import Link from "next/link";
import { homePageContent } from "@/content/home.json";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AboutPreview: React.FC = () => {
  const { aboutPreview } = homePageContent;

  return (
    <section
      id="home-aboutPreview"
      aria-labelledby="about-preview-heading"
      className="px-50 py-25 gap-20 flex"
    >
      <div>
        <p className="text-lg text-brand-primary">{aboutPreview.badgeTitle}</p>

        <h2
          id="about-preview-heading"
          className="text-5xl text-primary max-w-4xl mt-5 font-semibold"
        >
          {aboutPreview.heading}
        </h2>

        <p className="mt-4 text-lg text-muted-foreground leading-tight max-w-3xl">
          {aboutPreview.description}
        </p>

        <ul className="flex flex-col mt-5 pl-8" aria-label="Highlights">
          {aboutPreview.highlights.map((highlight, index) => (
            <li key={index} className="list-disc">
              <span className="text-lg">{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          href={aboutPreview.cta.link}
          className={cn(
            buttonVariants({
              variant: "brand",
              size: "lg",
            }),
            "mt-10",
          )}
        >
          {aboutPreview.cta.label}
        </Link>
      </div>

      <div className="relative w-125 h-80 shrink-0">
        <Image
          src={aboutPreview.assets_bannerImage.src}
          alt={aboutPreview.assets_bannerImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
