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
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",

  verification: {
    google: "MLlqy7RymXYeSE0a9ZQh4wXjlHwUhnzWm_7MxtAGCr4",
    yandex: "d70244b4905fbdc9",
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
      telephone: baseInfo.phones[2].label,
      email: baseInfo.emails.primary,
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
