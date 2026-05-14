import React from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbNavItem[];
  className?: string;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  items,
  className,
}) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/">Home</Link>} />
        </BreadcrumbItem>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<Link href={item.href}>{item.label}</Link>}
                  />
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
