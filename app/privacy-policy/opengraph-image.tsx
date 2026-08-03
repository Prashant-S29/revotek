import { ImageResponse } from "next/og";

import privacyPolicyContent from "@/content/privacy-policy.json";
import { OgTemplate } from "@/lib/og/OgTemplate";

const { seo, hero } = privacyPolicyContent.privacyPolicyPageContent;

export const alt = seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    <OgTemplate
      title={hero.heading}
      description={hero.description}
      variant="default"
    />,
    size,
  );
}
