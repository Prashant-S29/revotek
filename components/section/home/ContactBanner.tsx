import Link from "next/link";
import { homePageContent } from "@/content/home.json";
import { Button, buttonVariants } from "@/components/ui/button";

export const ContactBanner: React.FC = () => {
  const { ctaContact } = homePageContent;

  return (
    <section
      id="home-contactBanner"
      aria-labelledby="contact-banner-heading"
      className="px-50 py-25"
    >
      <div className="w-full bg-brand-primary/20 relative overflow-hidden rounded-4xl px-20 py-16 flex-col flex  items-center ">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/20 z-0"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/20 z-0"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-primary/20 z-0"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-brand-primary/20 z-0"
        />
        <h2
          id="contact-banner-heading"
          className="text-5xl max-w-2xl text-center mt-5 font-semibold"
        >
          {ctaContact.heading}
        </h2>
        <p className="text-lg max-w-4xl mt-3 text-center text-primary/60  leading-tight">
          {ctaContact.description}
        </p>

        <nav
          aria-label="Contact call to action"
          className="flex  gap-4 mt-8 shrink-0"
        >
          <Button
            variant={ctaContact.cta.variant as keyof typeof buttonVariants}
            size="xl"
            nativeButton={false}
            className={
              ctaContact.cta.variant === "outline"
                ? "border-white text-white hover:bg-white hover:text-brand-primary"
                : "bg-white text-brand-primary hover:bg-white/90 hover:text-brand-primary"
            }
            render={
              <Link href={ctaContact.cta.link}>{ctaContact.cta.label}</Link>
            }
          />
        </nav>
      </div>
    </section>
  );
};
