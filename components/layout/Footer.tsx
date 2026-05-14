"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const SocialIcon = ({ platform }: { platform: string }) => {
  const IconComponent =
    data.socialIconMap[platform as keyof typeof data.socialIconMap];

  if (!IconComponent) return null;

  return <HugeiconsIcon icon={IconComponent} size={18} />;
};

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-foreground px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="pt-16 pb-10">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12"
        >
          {/* Company */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <Link href="/" className="w-fit">
              <h3 className="text-white font-medium">
                Revotek Elevators
              </h3>
            </Link>

            <p className="text-sm leading-relaxed text-white/60">
              {data.tagline}
            </p>

            <ul className="flex gap-3">
              {Object.entries(data.socials).map(
                ([platform, href]) => (
                  <motion.li
                    key={platform}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "icon-lg",
                        }),
                        "bg-transparent border-muted-foreground text-white hover:bg-primary-foreground hover:text-primary rounded-full"
                      )}
                    >
                      <SocialIcon platform={platform} />
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
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
                    <li key={email} className="flex items-center gap-2">
                      <HugeiconsIcon
                        icon={Mail01Icon}
                        className="w-4 h-4 text-white flex-shrink-0"
                      />
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
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <h3 className="text-white font-medium">Contact</h3>
            <ul className="flex flex-col gap-5 list-none p-0 m-0" role="list">
              <li className="flex items-start gap-3">
                <ul
                  className="list-none p-0 m-0"
                  aria-label="Area-wise contact numbers"
                >
                  {data.contact.phones.map((phone) => (
                    <li key={phone.href} className="flex items-center gap-3 mb-2">
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
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="h-52 md:h-full min-h-52 rounded-xl overflow-hidden"
          >
            <iframe
              src={data.map.src}
              width="100%"
              height="100%"
              title={data.map.title}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>

      <Separator className="bg-accent-foreground" />

      {/* Bottom Footer */}
      <motion.div
        variants={fadeUp}
        className="py-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            © {data.copyright.year}, All rights reserved by{" "}
            <span className="text-white font-medium">
              {data.copyright.brand}
            </span>
          </p>

          <nav>
            <ul className="flex flex-wrap gap-1">
              {data.quickLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white px-2 py-1"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Scroll Button */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="outline"
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-brand-primary text-white shadow-lg"
        >
          <HugeiconsIcon icon={ArrowUp01Icon} />
        </Button>
      </motion.div>
    </motion.footer>
  );
};