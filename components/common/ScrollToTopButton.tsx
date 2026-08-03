"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowUp01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const WHATSAPP_URL =
  "https://wa.me/919265999898?text=Hello%20Revotek%20Elevators%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {whatsappOpen && (
          <motion.aside
            id="whatsapp-popup"
            aria-label="WhatsApp contact"
            className="fixed bottom-36 right-3 z-50 w-[calc(100vw-1.5rem)] max-w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-6"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
                <span className="font-semibold">Revotek Elevators</span>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappOpen(false)}
                aria-label="Close WhatsApp popup"
                className="flex size-7 items-center justify-center rounded-full text-xl leading-none transition-colors hover:bg-white/20"
              >
                ×
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Hi there! How can we help you?
              </p>
              <p className="mt-1 text-sm text-gray-500">+91 92659 99898</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <Button
        type="button"
        onClick={() => setWhatsappOpen((open) => !open)}
        aria-label="Chat with Revotek Elevators on WhatsApp"
        aria-expanded={whatsappOpen}
        aria-controls="whatsapp-popup"
        size="icon"
        className="fixed bottom-20 right-6 z-50 h-11 w-11 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a]"
      >
        <HugeiconsIcon icon={WhatsappIcon} className="size-6" />
      </Button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              y: { duration: 2, repeat: Infinity, delay: 0.2 },
            }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-brand-primary text-white shadow-lg"
            >
              <HugeiconsIcon icon={ArrowUp01Icon} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
