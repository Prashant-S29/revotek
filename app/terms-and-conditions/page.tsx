import Link from "next/link";
import type { Metadata } from "next";

import { BreadcrumbNav } from "@/components/common";
import termsContent from "@/content/terms-and-conditions.json";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { SchemaScript } from "@/lib/structured-data";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";

const path = "/terms-and-conditions";
const { termsAndConditionsPageContent } = termsContent;
const { seo, hero, introduction, sections } = termsAndConditionsPageContent;

type TermsSectionData = {
  id: string;
  number: number;
  title: string;
  introduction?: string;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  items?: string[];
  cta?: {
    label: string;
    href: string;
  };
  highlight?: boolean;
};

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: seo.title,
  description: seo.description,
  path,
  keywords: seo.keywords,
  ogImageAlt: seo.ogImageAlt,
});

const TermsAndConditionsPage: React.FC = () => {
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
          id="terms-and-conditions-hero"
          aria-labelledby="terms-and-conditions-heading"
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
              id="terms-and-conditions-heading"
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
                <TermsSection
                  key={section.id}
                  section={section as TermsSectionData}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const TermsSection = ({ section }: { section: TermsSectionData }) => (
  <section
    id={section.id}
    aria-labelledby={`${section.id}-heading`}
    className={
      section.highlight
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

    {section.items && <TermsList items={section.items} />}

    {section.paragraphsAfter?.map((paragraph) => (
      <p
        key={paragraph}
        className="mt-4 text-base leading-7 text-muted-foreground"
      >
        {paragraph}
      </p>
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

const TermsList = ({ items }: { items: readonly string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground marker:text-brand-primary">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default TermsAndConditionsPage;
