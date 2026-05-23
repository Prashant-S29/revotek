"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { baseInfo } from "@/seo-configs/baseInfo";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  InstagramIcon,
  Facebook02Icon,
  NewTwitterIcon,
  WhatsappIcon,
  Mail01Icon,
  Call02Icon,
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
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
  copyright: {
    year: 2026,
    brand: "Revotek Elevators",
  },
  socialIconMap: {
    facebook: Facebook02Icon,
    instagram: InstagramIcon,
    whatsapp: WhatsappIcon,
    twitter: NewTwitterIcon,
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const SocialIcon = ({ platform }: { platform: string }) => {
  const IconComponent =
    data.socialIconMap[platform as keyof typeof data.socialIconMap];

  if (!IconComponent) return null;

  return <HugeiconsIcon icon={IconComponent} size={18} />;
};

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-foreground px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
    >
      <div className="pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">

          {/* Company */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <h3 className="text-white font-medium">
                Revotek Elevators
              </h3>
            </Link>

            <p className="text-sm leading-relaxed text-white/60">
              {data.tagline}
            </p>

            <ul className="flex gap-3">
              {Object.entries(data.socials).map(([platform, href]) => (
                <li key={platform}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
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

          {/* Support */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-medium">Support</h3>

            <ul className="flex flex-col gap-5 list-none p-0 m-0">
              <li>
                <Link
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${data.contact.address.streetAddress}, ${data.contact.address.addressLocality}, ${data.contact.address.addressRegion} ${data.contact.address.postalCode}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
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
                    <li key={email} className="flex items-center gap-2">
                      <HugeiconsIcon
                        icon={Mail01Icon}
                        className="w-4 h-4 text-white flex-shrink-0"
                      />

                      <Link
                        href={`mailto:${email}`}
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

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-medium">Contact</h3>

            <ul className="flex flex-col gap-5 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <ul className="list-none p-0 m-0">
                  {data.contact.phones.map((phone) => (
                    <li
                      key={phone.href}
                      className="flex items-center gap-3 mb-2"
                    >
                      <HugeiconsIcon
                        icon={Call02Icon}
                        className="w-4 h-4 text-white flex-shrink-0"
                      />

                      <div>
                        <span className="text-xs text-white block mb-0.5">
                          {phone.area} — {phone.name}
                        </span>

                        <a
                          href={phone.href}
                          className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                          {phone.label}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Map */}
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

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white/60 text-center sm:text-left">
            © {data.copyright.year}, All rights reserved by{" "}
            <span className="text-white font-medium">
              {data.copyright.brand}
            </span>
          </p>

          <nav>
            <ul className="flex flex-wrap items-center">
              {data.quickLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="flex items-center"
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white px-2 py-1"
                  >
                    {link.label}
                  </Link>

                  {index !== data.quickLinks.length - 1 && (
                    <span className="w-px h-4 bg-white/20 mx-1" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </motion.footer>
  );
};