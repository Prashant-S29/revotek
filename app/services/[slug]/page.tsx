import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";
import { buildFaqSchema, SchemaScript } from "@/lib/structured-data";
import { servicesPageContent } from "@/content/services.json";
import {
  ContactBanner,
  Hero,
  ServiceFAQs,
  ServiceFeaturesBenefits,
  ServiceOverview,
  ServiceProcess,
} from "@/components/section/services/details";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return servicesPageContent.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = servicesPageContent.services.find((s) => s.slug === slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

const ServiceDetail: React.FC<{
  params: Promise<{ slug: string }>;
}> = async ({ params }) => {
  const { slug } = await params;

  const service = servicesPageContent.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const webPageSchema = buildWebPageSchema({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    type: "WebPage",
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ],
  });

  const faqSchema = buildFaqSchema({
    path: `/services/${service.slug}`,
    isSectionOnly: false,
    items: service.faqs,
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={faqSchema} />
      <main id={`service-${service.slug}`}>
        <Hero service={service} />
        <ServiceOverview service={service} />
        <ServiceProcess service={service} />
        <ServiceFeaturesBenefits service={service} />
        <ServiceFAQs service={service} />
        <ContactBanner service={service} />
      </main>
    </>
  );
};

export default ServiceDetail;
