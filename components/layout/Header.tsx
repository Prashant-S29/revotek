"use client";

import Image from "next/image";
import Link from "next/link";

// hooks
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// icons
import { Menu09Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const data = {
  logo: "/assets/logo.webp",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
  ],
  contactCTA: {
    label: "Contact Us",
    href: "/contact",
  },
};

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      const timeout = setTimeout(() => setDrawerOpen(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return (
    <header
      className={`
        w-full top-0 fixed z-50 flex justify-between px-6 md:px-20 lg:px-30 xl:px-50 py-4 items-center transition-[background-color,border-color] duration-300
        ${scrolled ? "border-b border-gray-200  bg-white" : "border-b border-transparent  bg-transparent"}
      `}
      role="banner"
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src={data.logo}
          alt="Revotek logo"
          width={100}
          height={80}
          priority
          className="h-16 w-auto"
        />
      </Link>

      <nav aria-label="Primary navigation" className="hidden md:block">
        <ul className="flex gap-8 items-center list-none m-0 p-0" role="list">
          {data.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Button
                  variant="ghost"
                  size="lg"
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-brand-primary font-semibold underline underline-offset-4"
                      : ""
                  }
                  nativeButton={false}
                  render={<Link href={item.href}>{item.label}</Link>}
                />
              </li>
            );
          })}

          <li>
            <Button
              size="lg"
              nativeButton={false}
              render={
                <Link href={data.contactCTA.href}>{data.contactCTA.label}</Link>
              }
            />
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-sheet"
          onClick={() => setDrawerOpen(true)}
        >
          <HugeiconsIcon icon={Menu09Icon} aria-hidden="true" />
        </Button>
      </div>

      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent
          side="right"
          id="mobile-nav-sheet"
          aria-label="Navigation menu"
        >
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation links
            </SheetDescription>
          </SheetHeader>

          <nav aria-label="Mobile primary navigation" className="px-4 pb-8">
            <ul className="flex flex-col gap-2 list-none m-0 p-0" role="list">
              {data.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Button
                          variant="ghost"
                          size="lg"
                          className={`
                            w-full justify-start text-base
                            ${isActive ? "text-brand-primary font-semibold" : ""}
                          `}
                          aria-current={isActive ? "page" : undefined}
                          nativeButton={false}
                          render={<Link href={item.href}>{item.label}</Link>}
                        />
                      }
                    />
                  </li>
                );
              })}
              <li>
                <Button
                  size="lg"
                  nativeButton={false}
                  render={
                    <Link href={data.contactCTA.href}>
                      {data.contactCTA.label}
                    </Link>
                  }
                />
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
