import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";
import { SchemaScript } from "@/lib/structured-data";
import { Hero, ServicesGrid } from "@/components/section/services";

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Revotek Elevators offers complete elevator services in Ahmedabad and Gandhinagar, Gujarat. Installation, maintenance, repair, modernization, AMC, and spare parts supply for residential, commercial, and industrial buildings.",
  path: "/services",
  keywords: [
    "elevator services Ahmedabad",
    "elevator services Gujarat",
    "elevator installation Ahmedabad",
    "elevator maintenance Ahmedabad",
    "elevator repair Ahmedabad",
    "elevator modernization Gujarat",
    "elevator AMC Ahmedabad",
    "elevator spare parts Ahmedabad",
    "lift services Ahmedabad",
    "elevator company Gujarat",
  ],
});

const Services: React.FC = () => {
  const webPageSchema = buildWebPageSchema({
    title: "Elevator Services in Ahmedabad and Gandhinagar, Gujarat | Revotek Elevators",
    description:
      "Revotek Elevators offers complete elevator services in Ahmedabad and Gandhinagar, Gujarat. Installation, maintenance, repair, modernization, AMC, and spare parts supply for residential, commercial, and industrial buildings.",
    path: "/services",
    type: "CollectionPage",
    breadcrumbs: [{ name: "Services", path: "/services" }],
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <main id="services">
        <Hero />
        <ServicesGrid />
      </main>
    </>
  );
};

export default Services;
