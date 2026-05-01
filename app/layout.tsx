import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { rootMetadata, rootStructuredData } from "@/seo-configs/metadata";
import { baseInfo } from "@/seo-configs/baseInfo";
import "@/styles/globals.css";
import { geist } from "@/lib/fonts";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header, Footer } from "@/components/layout";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

// ─────────────────────────────────────────────────────────────────────────────
// METADATA EXPORT
// Next.js reads this and merges it with page-level metadata
// All pages inherit these values unless they override them
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = rootMetadata;

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT EXPORT
// Separated from metadata per Next.js 14+ requirement
// themeColor here MUST match theme_color in manifest.ts
// ─────────────────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  // Prevents font scaling on orientation change — avoids layout shifts
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility — don't set to 1
  userScalable: true, // Never disable — accessibility requirement

  // TODO: update to match your brand's primary color
  // This colors the browser chrome on Android Chrome
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  // Ensures content fills the safe area on notched devices (iPhone X+)
  viewportFit: "cover",
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={baseInfo.language}
      dir="ltr"
      // Add font variable classes here once you configure next/font above
      // className={`${inter.variable} antialiased`}
      className={cn(
        "antialiased",
        geist.variable,
        "font-sans",
        figtree.variable,
      )}
      // Prevents theme flash — set to your default theme
      // If using a theme system, manage this via a script to avoid FOUC
      // suppressHydrationWarning
    >
      <head>
        {/* ── Structured Data ──────────────────────────────────────────────
            Injected directly — not via next/head — for RSC compatibility
            This fires on every page as the global identity layer
            Page-level schemas are added inside each page component        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootStructuredData),
          }}
        />

        {/* ── DNS Prefetch ─────────────────────────────────────────────────
            Resolves DNS for external domains before the browser needs them
            Add every third-party domain your site loads resources from
            Reduces connection latency — measurable LCP improvement        */}
        {/* <link rel="dns-prefetch" href="//fonts.googleapis.com" /> */}
        {/* <link rel="dns-prefetch" href="//cdn.yourdomain.com" />   */}

        {/* ── Preconnect ───────────────────────────────────────────────────
            Full TCP + TLS handshake ahead of time — stronger than prefetch
            Only use for origins you are CERTAIN will be needed on load
            Max 2-3 preconnects — too many wastes bandwidth              */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

        {/* ── LLM Discovery ────────────────────────────────────────────────
            Points AI crawlers to your llms.txt file
            Emerging standard — like robots.txt but for LLMs             */}
        <link
          rel="llms"
          type="text/plain"
          href="/llms.txt"
          title="LLM-readable site index"
        />

        {/* ── Verification Files ────────────────────────────────────────────
            Alternative to meta tags — place files in /public/ instead
            BingSiteAuth.xml → Bing Webmaster Tools verification
            Both methods work — choose one per platform                  */}
        {/* <meta name="msvalidate.01" content="<BING_TOKEN>" />      */}
        {/* <meta name="yandex-verification" content="<YANDEX_TOKEN>" /> */}
      </head>

      <body>
        {/* ── Skip to Content ──────────────────────────────────────────────
            Accessibility requirement — WCAG 2.1 Level A
            Also signals semantic structure to crawlers
            Visually hidden until focused via keyboard navigation         */}
        <a
          href="#main-content"
          className={[
            "sr-only",
            "focus:not-sr-only",
            "focus:fixed",
            "focus:left-4",
            "focus:top-4",
            "focus:z-9999",
            "focus:rounded-md",
            "focus:bg-white",
            "focus:px-4",
            "focus:py-2",
            "focus:text-black",
            "focus:shadow-lg",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-black",
          ].join(" ")}
        >
          Skip to main content
        </a>

        <Header />

        {/* ── Main Content ─────────────────────────────────────────────────
            id="main-content" is the skip-link target
            role="main" is redundant on <main> but kept for older tools  */}
        <main id="main-content">{children}</main>

        <Footer />

        {/* ── Footer ───────────────────────────────────────────────────────
            TODO: add your <Footer /> component here
            Use <footer> semantic element
            Include: nav links, contact info, social links, legal links
            Footer links contribute to internal linking structure         */}
      </body>
    </html>
  );
}
