import "@/styles/globals.css";

// seo configs
import { rootMetadata, rootStructuredData } from "@/seo-configs/metadata";
import { baseInfo } from "@/seo-configs/baseInfo";

// types
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

// fonts
import { figtree } from "@/lib/fonts";

// utils
import { cn } from "@/lib/utils";

// components
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b92c3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b92c3" },
  ],
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={baseInfo.language}
      dir="ltr"
      className={cn("antialiased", "font-sans", figtree.variable)}
    >
      <head>
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
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-9999 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
