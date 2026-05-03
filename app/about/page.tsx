import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";
import { SchemaScript } from "@/lib/structured-data";
import {
  CoreValues,
  Hero,
  MissionVision,
  WhoWeAre,
  WhyChooseUs,
  // WhoWeAre,
  // MissionVision,
  // WhyChooseUs,
  // CoreValues,
  // IndustriesWeServe,
  // ContactBanner,
} from "@/components/section/about";
import { ContactBanner } from "@/components/section/home";

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | Revotek Elevators - Elevator Company in Gujarat",
  description:
    "Learn about Revotek Elevators — a professional elevator installation, maintenance, and repair company based in Gujarat, Gujarat. Serving residential, commercial, and industrial clients across India.",
  path: "/about",
  keywords: [
    "elevator company Gujarat",
    "elevator service Gujarat",
    "about Revotek Elevators",
    "elevator installation company India",
    "elevator maintenance company Gujarat",
  ],
});

const About: React.FC = () => {
  const webPageSchema = buildWebPageSchema({
    title: "About Us | Revotek Elevators",
    description:
      "Learn about Revotek Elevators | A professional elevator installation, maintenance, and repair company based in Ahmedabad, Gujarat. Serving residential, commercial, and industrial clients across India.",
    path: "/about",
    type: "AboutPage",
    breadcrumbs: [{ name: "About", path: "/about" }],
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <main id="about">
        <Hero />
        <WhoWeAre />
        <MissionVision />
        <WhyChooseUs />
        <CoreValues />
        <ContactBanner />
      </main>
    </>
  );
};

export default About;
