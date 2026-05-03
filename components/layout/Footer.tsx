"use client";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { baseInfo } from "@/seo-configs/baseInfo";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Facebook02Icon,
  NewTwitterIcon,
  WhatsappIcon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const data = {
  logo: baseInfo.logo,
  tagline: baseInfo.description,
  socials: baseInfo.social,
  contact: {
    address: baseInfo.address,
    emails: baseInfo.emails,
    phones: baseInfo.phones,
  },
  map: {
    src: baseInfo.address.googleMapSrc,
    title: "Revotek Office Location Map",
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  copyright: {
    year: 2025,
    brand: "Revotek",
  },
  socialIconMap: {
    facebook: Facebook02Icon,
    instagram: InstagramIcon,
    whatsapp: WhatsappIcon,
    twitter: NewTwitterIcon,
  },
};

const SocialIcon = ({ platform }: { platform: string }) => {
  const IconComponent =
    data.socialIconMap[platform as keyof typeof data.socialIconMap];
  if (!IconComponent) return null;
  return <HugeiconsIcon icon={IconComponent} size={18} />;
};

// FIX: Guard window access for Next.js SSR
const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground px-50">
      <div className=" pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Go to homepage" className="w-fit">
              <h3 className="text-white font-medium">Revotek Elevators</h3>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              {data.tagline}
            </p>
            <ul
              className="flex gap-3 list-none p-0 m-0"
              role="list"
              aria-label="Social media links"
            >
              {Object.entries(data.socials).map(([platform, href]) => (
                <li key={platform}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "icon-lg",
                      }),
                      "bg-transparent border-muted-foreground text-white hover:bg-primary-foreground hover:text-primary rounded-full",
                    )}
                  >
                    <SocialIcon platform={platform} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-medium">Support</h3>
            <ul className="flex flex-col gap-5 list-none p-0 m-0" role="list">
              <li>
                <Link
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${data.contact.address.streetAddress}, ${data.contact.address.addressLocality}, ${data.contact.address.addressRegion} ${data.contact.address.postalCode}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="View office location on map"
                >
                  <span>
                    {data.contact.address.streetAddress},{" "}
                    {data.contact.address.addressLocality},{" "}
                    {data.contact.address.addressRegion} —{" "}
                    {data.contact.address.postalCode}
                  </span>
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <ul className="flex flex-col gap-1 list-none p-0 m-0">
                  {Object.values(data.contact.emails).map((email) => (
                    <li key={email}>
                      <Link
                        href={`mailto:${email}`}
                        aria-describedby={`Send email to ${email}`}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {email}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-medium">Contact</h3>
            <ul className="flex flex-col gap-5 list-none p-0 m-0" role="list">
              <li className="flex items-start gap-3">
                <ul
                  className="flex flex-col gap-3 list-none p-0 m-0"
                  aria-label="Area-wise contact numbers"
                >
                  {data.contact.phones.map((phone) => (
                    <li key={phone.href}>
                      <span className="text-xs text-white/60 block mb-0.5">
                        {phone.area} — {phone.name}
                      </span>
                      <a
                        href={phone.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="h-52 md:h-full min-h-52 rounded-xl overflow-hidden">
            <iframe
              src={data.map.src}
              width="100%"
              height="100%"
              title={data.map.title}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <Separator className="bg-accent-foreground" />

      <div className="py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            © {data.copyright.year}, All rights reserved by{" "}
            <span className="text-white font-medium">
              {data.copyright.brand}
            </span>
          </p>
          <nav aria-label="Footer quick links">
            <ul
              className="flex flex-wrap gap-1 list-none p-0 m-0 justify-center"
              role="list"
            >
              {data.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 px-2 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-brand-primary hover:text-white text-white shadow-lg hover:bg-brand-primary transition-all duration-200"
      >
        <HugeiconsIcon icon={ArrowUp01Icon} aria-hidden="true" />
      </Button>
    </footer>
  );
};
