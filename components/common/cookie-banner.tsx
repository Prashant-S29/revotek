"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HugeiconsIcon } from "@hugeicons/react";
import { CookieIcon } from "@hugeicons/core-free-icons";

const COOKIE_NAME = "revotek-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_NAME, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-5 z-[9999] px-4"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-background shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-md">
            <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              {/* Left Content */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <HugeiconsIcon
                    icon={CookieIcon}
                    size={24}
                    className="text-primary"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    We Value Your Privacy
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
                    Revotek Elevators uses cookies to improve your browsing
                    experience, remember your preferences, and analyze website
                    traffic. By clicking <strong>Accept All</strong>, you agree
                    to our use of cookies. You can learn more by reading our{" "}
                    <Link
                      href="/cookie-policy"
                      className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <button
                  type="button"
                  onClick={() => handleConsent("rejected")}
                  className="rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Reject
                </button>

                <button
                  type="button"
                  onClick={() => handleConsent("accepted")}
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}