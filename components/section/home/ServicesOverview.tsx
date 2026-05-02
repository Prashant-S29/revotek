import { Button } from "@/components/ui/button";
import { homePageContent } from "@/content/home.json";
import Image from "next/image";
import Link from "next/link";

export const ServicesOverview: React.FC = () => {
  return (
    <div id="home-servicesOverview" className="px-50">
      <div className="w-full flex flex-col p-20 bg-brand-primary/60 rounded-4xl">
        <h5 className="text-lg">
          {homePageContent.servicesOverview.badgeTitle}
        </h5>
        <section className="flex justify-between items-start">
          <section>
            <h1 className="text-5xl text-primary max-w-4xl mt-3 font-semibold">
              {homePageContent.servicesOverview.heading}
            </h1>
            <p className="mt-4 text-lg text-primary/60 leading-tight max-w-3xl">
              {homePageContent.servicesOverview.description}
            </p>
          </section>
          <Button
            variant="brand"
            size="xl"
            nativeButton={false}
            className="bg-white hover:bg-white/90  text-brand-primary hover:text-brand-primary"
            render={
              <Link href={homePageContent.servicesOverview.cta.link}>
                {homePageContent.servicesOverview.cta.label}
              </Link>
            }
          />
        </section>

        <section className="grid mt-8 grid-cols-3 gap-5">
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

              <Button
                nativeButton={false}
                render={
                  <Link href={service.cta.href}>{service.cta.label}</Link>
                }
                className="w-fit"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
