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

  emails: {
    primary: "info@revotekelevators.com",
    secondary: "revotekservices@gmail.com",
  },
  phones: [
    {
      area: "Gandhinagar",
      name: "Sunil Vadan",
      label: "+91 84012 54119",
      href: "tel:+918401254119",
    },
    {
      area: "New Ahmedabad",
      name: "Dhruv Patel",
      label: "+91 85113 76037",
      href: "tel:+918511376037",
    },
    {
      area: "Old Ahmedabad",
      name: "Dilip Varlekar",
      label: "+91 92659 99898",
      href: "tel:+919265999898",
    },
  ],

  address: {
    streetAddress:
      "Shree Hari Darshan Industrial Park Rd, Phase IV, Vatva GIDC",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.5364399611703!2d72.64495699999999!3d22.976447500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8942442fd955%3A0xb68dd4e3bba0491d!2sShree%20Hari%20Industrial%20Park!5e1!3m2!1sen!2sin!4v1761975771820!5m2!1sen!2sin",
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
