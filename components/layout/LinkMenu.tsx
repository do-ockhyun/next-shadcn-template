'use client';

import Link from "next/link"
import { Menu, Icons } from "@/constant/menu"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation";

type LinkMenuProps = {
  items: Menu[];
  isMobile?: boolean;
};

function LinkMenu({ items, isMobile }: LinkMenuProps) {
  if (items?.length === 0) {
    return null;
  }
  const path = usePathname();
  const mx = isMobile ? "mx-[-0.65rem]" : "";
  const activeClass = `${mx} flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary`;
  const defaultClass = `${mx} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`;

  return (
    <>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "home"];
        return (
          <Link key={index} href={item.href} className={item.href === path ? activeClass : defaultClass}>
            <Icon className="h-4 w-4" />
            {item.name}
            {item.bagde && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{item.bagde}</Badge>
            )}
          </Link>
        )
      })}
    </>
  );
}

export default LinkMenu;