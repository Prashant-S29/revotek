export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const businessType = "LocalBusiness" as const;

// Core Info
export const baseInfo = {
  name: "Revotek Elevators",
  shortName: "Revotek",
  legalName: "Revotek Elevators",

  title:
    "Revotek Elevators - Professional elevator installation, maintenance, repair, and modernization services in India",
  fullTitle:
    "Revotek Elevators - Professional elevator installation, maintenance, repair, and modernization services in India",
  description:
    "Your trusted partner for professional elevator installation, maintenance, repair, and modernization services. Serving residential, commercial, and industrial clients across India.",

  email: "info@revotekelevators.com",
  phone: "+91-92659-99898",

  address: {
    streetAddress:
      "Shree Hari Darshan Industrial Park Rd, Phase IV, Vatva GIDC",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },

  logo: `${baseUrl}/assets/logo.webp`,
  ogImage: `${baseUrl}/opengraph-image.png`,

  geo: {
    latitude: "22.9782641",
    longitude: "72.6451137",
  },

  openingHours: ["Mo-Su 09:00-18:00"],
  priceRange: "",

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61584123771185",
    instagram: "https://www.instagram.com/revotekelevators",
    whatsapp: "https://wa.me/919265999898",
    twitter: "https://twitter.com/RevotekOfficial",
  },

  foundingDate: "2026-01-01",
  areaServed: "India",

  keywords: [
    "Elevator Installation",
    "Elevator Maintenance",
    "Elevator Repair",
    "Elevator Modernization",
    "Annual Maintenance Contract",
    "Elevator Spare Parts Supply",
  ],

  locale: "en_IN",
  language: "en",
} as const;

// sameAs array — all non-empty social URLs, used in schema
export const sameAsUrls = Object.values(baseInfo.social).filter((v) =>
  v.startsWith("https://"),
);

// Canonical URL builder — always returns clean URLs, no trailing slash
export const buildCanonical = (path: string = ""): string => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${clean === "/" ? "" : clean}`;
};

// OG image absolute URL builder — for dynamic OG image routes
export const buildOgImageUrl = (path: string = ""): string => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${clean}/opengraph-image`;
};

// Page title builder — applies the template: "Page Name | Brand"
export const buildTitle = (pageTitle?: string): string => {
  if (!pageTitle) return baseInfo.fullTitle;
  return `${pageTitle} | ${baseInfo.name}`;
};

// typesafe optional object builder
export const optional = <T extends object>(
  condition: unknown,
  obj: T,
): Partial<T> => (Boolean(condition) ? obj : {});
