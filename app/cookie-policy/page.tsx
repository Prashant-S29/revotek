import Link from "next/link";
import type { Metadata } from "next";

import { BreadcrumbNav } from "@/components/common";
import cookiePolicyData from "@/content/cookie.json";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { SchemaScript } from "@/lib/structured-data";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";

const path = "/cookie-policy";
const { cookiePolicyPageContent } = cookiePolicyData;
const { hero, lastUpdated, sections, contact } = cookiePolicyPageContent;

type CookieSectionData = {
  title: string;
  content?: string[];
  items?: Array<{
    title: string;
    description: string;
  }>;
};

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "Read the Revotek Elevators Cookie Policy to learn how we use cookies, improve website functionality, and protect your browsing experience.",
  path,
});

const CookiePolicyPage = () => {
  const webPageSchema = buildWebPageSchema({
    title: "Cookie Policy | Revotek Elevators",
    description:
      "Learn how Revotek Elevators uses cookies to improve your browsing experience, enhance website performance, and provide secure, reliable services.",
    path,
    type: "WebPage",
    breadcrumbs: [{ name: hero.heading, path }],
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <article>
        <section
          id="cookie-policy-hero"
          aria-labelledby="cookie-policy-heading"
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
            <BreadcrumbNav items={[{ label: hero.heading, href: path }]} />

            <h1
              id="cookie-policy-heading"
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
              Last updated: {lastUpdated}
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((section, index) => (
                <CookieSection
                  key={section.title}
                  section={section as CookieSectionData}
                  number={index + 1}
                />
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
                {contact.heading}
              </h2>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {contact.description}
              </p>

              <div className="mt-5 space-y-2 text-base leading-7 text-muted-foreground">
                <p className="font-semibold text-foreground">{contact.company}</p>
                <p>{contact.address}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:text-foreground"
              >
                Contact Revotek Elevators
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const CookieSection = ({
  section,
  number,
}: {
  section: CookieSectionData;
  number: number;
}) => (
  <section
    aria-labelledby={`cookie-section-${number}`}
    className="scroll-mt-32"
  >
    <h2
      id={`cookie-section-${number}`}
      className="text-2xl font-semibold leading-tight tracking-tight text-foreground"
    >
      {number}. {section.title}
    </h2>

    {section.content?.map((paragraph) => (
      <p
        key={paragraph}
        className="mt-4 text-base leading-7 text-muted-foreground"
      >
        {paragraph}
      </p>
    ))}

    {section.items && (
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {section.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border/70 bg-background p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default CookiePolicyPage;