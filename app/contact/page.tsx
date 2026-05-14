import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { buildWebPageSchema } from "@/lib/structured-data/webpage";
import { SchemaScript } from "@/lib/structured-data";
import { ContactForm, Hero, QuickContact } from "@/components/section/contact";

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Revotek Elevators | Elevator Services in Ahmedabad, Gujarat",
  description:
    "Contact Revotek Elevators in Ahmedabad for elevator installation, maintenance, repair, AMC, and spare parts. Call, WhatsApp, or fill the form — our team responds within one business day.",
  path: "/contact",
  keywords: [
    "contact Revotek Elevators",
    "elevator service contact Ahmedabad",
    "elevator company Ahmedabad contact",
    "elevator repair contact Gujarat",
    "elevator maintenance Ahmedabad phone",
    "elevator AMC enquiry Ahmedabad",
    "elevator installation quote Ahmedabad",
    "lift service Ahmedabad contact",
    "elevator company Gujarat phone",
    "elevator WhatsApp Ahmedabad",
  ],
});

const Contact: React.FC = () => {
  const webPageSchema = buildWebPageSchema({
    title:
      "Contact Revotek Elevators | Elevator Services in Ahmedabad, Gujarat",
    description:
      "Contact Revotek Elevators in Ahmedabad for elevator installation, maintenance, repair, AMC, and spare parts. Call, WhatsApp, or fill the form — our team responds within one business day.",
    path: "/contact",
    type: "ContactPage",
    breadcrumbs: [{ name: "Contact", path: "/contact" }],
  });

  return (
    <>
      <SchemaScript schema={webPageSchema} />
      <main id="contact">
        <Hero />
        <section
          id="contact-form-section"
          aria-label="Contact form and direct contact options"
          className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50 py-15 lg:py-25"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <ContactForm />
            <QuickContact />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
