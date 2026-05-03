import { Button, buttonVariants } from "@/components/ui/button";
import { homePageContent } from "@/content/home.json";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const ServicesOverview: React.FC = () => {
  return (
    <div id="home-servicesOverview" className="px-50">
      <div className="w-full flex flex-col p-20 bg-brand-primary/20 relative overflow-hidden rounded-4xl">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/20 z-0"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/20 z-0"
        />

        <h5 className="text-lg">
          {homePageContent.servicesOverview.badgeTitle}
        </h5>
        <section className="flex justify-between relative z-10 items-start">
          <section>
            <h1 className="text-5xl text-primary max-w-4xl mt-3 font-semibold">
              {homePageContent.servicesOverview.heading}
            </h1>
            <p className="mt-4 text-lg text-primary/60 leading-tight max-w-3xl">
              {homePageContent.servicesOverview.description}
            </p>
          </section>

          <Link
            href={homePageContent.servicesOverview.cta.link}
            className={buttonVariants({
              variant: "brand",
              size: "xl",
            })}
          >
            {homePageContent.servicesOverview.cta.label}
          </Link>
        </section>

        <section className="grid mt-8 grid-cols-3 gap-5 relative z-10">
          {homePageContent.servicesOverview.services.map((service, index) => (
            <div
              key={index}
              className="w-full p-3 bg-white flex flex-col justify-between rounded-xl"
            >
              <section>
                <Image
                  src={service.assets_bannerImage.src}
                  alt={service.assets_bannerImage.alt}
                  width={500}
                  height={400}
                  className="h-60 w-full object-cover rounded-lg"
                />

                <h5 className="text-lg text-primary font-semibold mt-2 pl-1">
                  {service.title}
                </h5>
                <p className="text-sm text-muted-foreground mt-1 mb-3 pl-1 leading-tight">
                  {service.description}
                </p>
              </section>

              <Link
                href={service.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }),
                  "w-fit",
                )}
              >
                {service.cta.label}
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
