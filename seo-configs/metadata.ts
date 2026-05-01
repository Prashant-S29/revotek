import type { Metadata } from "next";
import {
  baseInfo,
  baseUrl,
  buildCanonical,
  businessType,
  sameAsUrls,
  optional,
} from "./baseInfo";

export const rootMetadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: baseInfo.fullTitle,
    template: `%s | ${baseInfo.name}`,
  },

  description: baseInfo.description,
  keywords: [...baseInfo.keywords],
  authors: [{ name: baseInfo.name, url: baseUrl }],
  creator: baseInfo.name,
  publisher: baseInfo.name,
  generator: "Next.js",

  alternates: {
    canonical: buildCanonical("/"),
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: baseInfo.locale,
    url: baseUrl,
    siteName: baseInfo.name,
    title: baseInfo.fullTitle,
    description: baseInfo.description,
    images: [
      {
        url: baseInfo.ogImage,
        width: 1200,
        height: 630,
        alt: baseInfo.fullTitle,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: baseInfo.social.twitter,
    creator: baseInfo.social.twitter,
    title: baseInfo.fullTitle,
    description: baseInfo.description,
    images: [
      {
        url: baseInfo.ogImage,
        width: 1200,
        height: 630,
        alt: baseInfo.fullTitle,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Add more sizes for full cross-platform support
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }, // TODO: add /public/icon.svg
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" }, // TODO: add /public/apple-icon.png
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg" }, // TODO: add safari pin
    ],
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Verification ──────────────────────────────────────────────────────────
  // Add your verification tokens after registering on each platform
  // See README.md → Platform Registration for instructions
  verification: {
    google: "<GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN>", // TODO
    // yandex: "<YANDEX_WEBMASTER_TOKEN>",                  // TODO
    // bing is handled via BingSiteAuth.xml in /public/     // TODO
    // other: { "baidu-site-verification": "<TOKEN>" },     // TODO if targeting China
  },

  category: "engineering",
};

export const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": businessType,
      "@id": `${baseUrl}/#business`,
      name: baseInfo.name,
      legalName: baseInfo.legalName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#logo`,
        url: baseInfo.logo,
        contentUrl: baseInfo.logo,
        width: 512,
        height: 512,
        caption: baseInfo.name,
      },
      image: baseInfo.ogImage,
      description: baseInfo.description,
      telephone: baseInfo.phone,
      email: baseInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: baseInfo.address.streetAddress,
        addressLocality: baseInfo.address.addressLocality,
        addressRegion: baseInfo.address.addressRegion,
        postalCode: baseInfo.address.postalCode,
        addressCountry: baseInfo.address.addressCountry,
      },

      ...optional(baseInfo.geo?.latitude && baseInfo.geo?.longitude, {
        geo: {
          "@type": "GeoCoordinates",
          latitude: baseInfo.geo!.latitude,
          longitude: baseInfo.geo!.longitude,
        },
      }),
      ...optional(baseInfo.openingHours?.length, {
        openingHours: baseInfo.openingHours,
      }),

      ...optional(baseInfo.priceRange, {
        priceRange: baseInfo.priceRange,
      }),

      ...optional(baseInfo.areaServed, {
        areaServed: {
          "@type": "Country",
          name: baseInfo.areaServed,
        },
      }),

      ...optional(baseInfo.foundingDate, {
        foundingDate: baseInfo.foundingDate,
      }),

      sameAs: sameAsUrls,
    },

    // potentialAction → tells Google your site has internal search
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: baseInfo.name,
      description: baseInfo.description,
      inLanguage: baseInfo.language,
      publisher: {
        "@id": `${baseUrl}/#business`,
      },
    },

    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#homepage`,
      url: baseUrl,
      name: baseInfo.fullTitle,
      description: baseInfo.description,
      inLanguage: baseInfo.language,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#business` },
      dateModified: new Date().toISOString(),
    },
  ],
};
