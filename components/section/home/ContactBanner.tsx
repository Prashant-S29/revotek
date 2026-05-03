import Link from "next/link";
import { homePageContent } from "@/content/home.json";
import { Button, buttonVariants } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappFreeIcons } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

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
          <Link
            href={ctaContact.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "brand",
                size: "xl",
              }),
              "bg-green-500 hover:bg-green-500/90",
            )}
          >
            <HugeiconsIcon icon={WhatsappFreeIcons} />
            {ctaContact.cta.label}
          </Link>
        </nav>
      </div>
    </section>
  );
};
