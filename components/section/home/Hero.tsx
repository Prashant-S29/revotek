import Image from "next/image";
import Link from "next/link";
import { homePageContent } from "@/content/home.json";
import { Button, buttonVariants } from "@/components/ui/button";

export const Hero: React.FC = () => {
  const { hero } = homePageContent;

  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="relative bg-gray-100 w-full flex flex-col min-h-screen justify-center"
    >
      <Image
        src={hero.assets_bannerImage.src}
        alt=""
        aria-hidden="true"
        role="presentation"
        priority
        fill
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover select-none rounded-br-[150px]"
      />

      <div className="relative z-10 px-50">
        <p className="text-lg" aria-hidden="true">
          {hero.badgeTitle}
        </p>

        <h1
          id="hero-heading"
          className="text-5xl text-primary max-w-3xl mt-5 font-semibold"
        >
          {hero.heading}
        </h1>

        <p className="mt-2 text-lg text-muted-foreground leading-tight max-w-3xl">
          {hero.description}
        </p>

        <nav aria-label="Hero call to action" className="flex gap-3 mt-8">
          {hero.ctas.map((cta, index) => (
            <Button
              key={index}
              variant={cta.variant as keyof typeof buttonVariants}
              size="lg"
              nativeButton={false}
              render={<Link href={cta.link}>{cta.label}</Link>}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};
