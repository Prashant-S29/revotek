import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";
import { buildFaqSchema, SchemaScript } from "@/lib/structured-data";
import { baseInfo } from "@/seo-configs/baseInfo";
import { homePageContent } from "@/content/home.json";
import {
  AboutPreview,
  ContactBanner,
  Hero,
  IndustriesWeServe,
  ServicesOverview,
  WhyChooseUs,
} from "@/components/section/home";
import { FAQs } from "@/components/section/home/FAQs";

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: baseInfo.title,
  description: baseInfo.description,
  path: "/",
  keywords: baseInfo.keywords,
});

const Home: React.FC = () => {
  const webPageSchema = buildWebPageSchema({
    title: baseInfo.fullTitle,
    description: baseInfo.description,
    path: "/",
    type: "WebPage",
    breadcrumbs: [],
  });

  const faqSchema = buildFaqSchema({
    path: "/",
    isSectionOnly: true,
    items: homePageContent.faq.items,
  });
  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <SchemaScript schema={faqSchema} />
      <main id="home">
        <Hero />
        <WhyChooseUs />
        <AboutPreview />
        <ServicesOverview />
        <IndustriesWeServe />
        <FAQs />
        <ContactBanner />
      </main>
    </>
  );
};

export default Home;
