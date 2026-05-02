import Link from "next/link";

// types
import type { Metadata } from "next";

// seo configs
import { baseInfo } from "@/seo-configs/baseInfo";

// utils
import { buildPageMetadata } from "@/lib/seo/buildPageMetadata";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found",
  description:
    `The page you are looking for does not exist or has been moved. ` +
    `Return to ${baseInfo.name} homepage to find what you need.`,
  path: "/404",
  noIndex: true,
  noFollow: false,
});

const NotFound: React.FC = () => {
  return (
    <main
      id="not-found"
      aria-labelledby="not-found-heading"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4"
    >
      <p
        aria-hidden="true"
        className="text-8xl font-bold text-muted-foreground/30 select-none"
      >
        404
      </p>

      <h1 id="not-found-heading" className="mt-4 text-2xl font-bold ">
        Page not found
      </h1>

      <p className="mt-2 text-muted-foreground text-center max-w-md">
        The page you are looking for does not exist, has been moved, or is
        temporarily unavailable.
      </p>

      <nav
        aria-label="Return navigation"
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <Button
          variant="default"
          size="lg"
          nativeButton={false}
          render={
            <Link href="/" aria-label={`Return to ${baseInfo.name} homepage`}>
              Back to Home
            </Link>
          }
        />
      </nav>
    </main>
  );
};

export default NotFound;
