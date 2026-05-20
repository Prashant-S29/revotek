"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
  );
};
