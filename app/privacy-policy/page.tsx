import Link from "next/link";
import type { Metadata } from "next";

import { BreadcrumbNav } from "@/components/common";
import privacyPolicyContent from "@/content/privacy-policy.json";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { SchemaScript } from "@/lib/structured-data";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";

const path = "/privacy-policy";
const { privacyPolicyPageContent } = privacyPolicyContent;
const { seo, hero, introduction, sections } = privacyPolicyPageContent;

type PolicySectionData = {
  id: string;
  number: number;
  title: string;
  introduction?: string;
  paragraphs?: string[];
  items?: string[];
  groups?: Array<{
    heading: string;
    items: string[];
  }>;
  cta?: {
    label: string;
    href: string;
  };
};

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
  keywords: seo.keywords,
  ogImageAlt: seo.ogImageAlt,
});

const PrivacyPolicyPage: React.FC = () => {
  const webPageSchema = buildWebPageSchema({
    title: `${seo.title} | Revotek Elevators`,
    description: seo.description,
    path,
    type: "WebPage",
    datePublished: `${hero.lastUpdatedISO}T00:00:00+05:30`,
    dateModified: `${hero.lastUpdatedISO}T00:00:00+05:30`,
    breadcrumbs: [{ name: hero.heading, path }],
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <article>
        <section
          id="privacy-policy-hero"
          aria-labelledby="privacy-policy-heading"
          className="relative w-full overflow-hidden bg-brand-primary/10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 z-0 h-96 w-96 rounded-full bg-brand-primary/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 z-0 h-48 w-48 rounded-full bg-brand-primary/10"
          />

          <div className="relative z-10 flex flex-col items-center px-3 pb-25 pt-40 text-center sm:px-6 md:px-10 md:pt-50 lg:px-10 xl:px-30 2xl:px-50">
            <BreadcrumbNav
              items={[{ label: hero.heading, href: path }]}
            />

            <h1
              id="privacy-policy-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-primary sm:text-4xl lg:text-4xl"
            >
              {hero.heading}
            </h1>

            <p className="mt-6 text-md font-normal leading-6 tracking-normal text-muted-foreground md:max-w-2xl">
              {hero.description}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
          />
        </section>

        <div className="px-3 py-14 sm:px-6 md:px-10 md:py-20 lg:px-10 xl:px-30 2xl:px-50">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-semibold text-brand-primary">
              {hero.lastUpdatedLabel}:{" "}
              <time dateTime={hero.lastUpdatedISO}>{hero.lastUpdated}</time>
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              {introduction}
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <PolicySection
                  key={section.id}
                  section={section as PolicySectionData}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const PolicySection = ({ section }: { section: PolicySectionData }) => {
  const isContactSection = Boolean(section.cta);

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={
        isContactSection
          ? "scroll-mt-32 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6 sm:p-8"
          : "scroll-mt-32"
      }
    >
      <h2
        id={`${section.id}-heading`}
        className="text-2xl font-semibold leading-tight tracking-tight text-foreground"
      >
        {section.number}. {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 text-base leading-7 text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}

      {section.introduction && (
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {section.introduction}
        </p>
      )}

      {section.items && <PolicyList items={section.items} />}

      {section.groups?.map((group) => (
        <div key={group.heading}>
          <h3 className="mt-7 text-lg font-semibold leading-tight text-foreground">
            {group.heading}
          </h3>
          <PolicyList items={group.items} />
        </div>
      ))}

      {section.cta && (
        <Link
          href={section.cta.href}
          className="mt-5 inline-flex font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:text-foreground"
        >
          {section.cta.label}
        </Link>
      )}
    </section>
  );
};

const PolicyList = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground marker:text-brand-primary">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default PrivacyPolicyPage;
