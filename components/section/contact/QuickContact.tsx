import { contactPageContent } from "@/content/contact.json";
import { baseInfo } from "@/seo-configs/baseInfo";
import {
  WhatsappBusinessFreeIcons,
  WhatsappFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const QuickContact: React.FC = () => {
  const { quickContact } = contactPageContent;

  return (
    <aside
      aria-labelledby="quick-contact-heading"
      className="flex flex-col gap-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 p-8"
    >
      <div>
        <h2
          id="quick-contact-heading"
          className="text-xl font-semibold text-primary"
        >
          {quickContact.heading}
        </h2>
        <p className="text-muted-foreground">{quickContact.description}</p>
      </div>

      <Link
        href={quickContact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${quickContact.whatsapp.label} — opens WhatsApp`}
        className="inline-flex items-center justify-center gap-3 size-5 w-full h-13 rounded-xl bg-green-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        <HugeiconsIcon icon={WhatsappFreeIcons} />
        {quickContact.whatsapp.label}
      </Link>

      {/* Divider */}
      <div aria-hidden="true" className="h-px bg-brand-primary/15" />

      <iframe
        src={baseInfo.address.googleMapSrc}
        width="100%"
        height="100%"
        title="Revotek Elevators"
        allowFullScreen
        loading="lazy"
        className="rounded-xl"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </aside>
  );
};
