import Link from "next/link"
import { Menu } from "@/constant/menu"
import { Badge } from "@/components/ui/badge"

type LinkMenuProps = {
  items: Menu[];
  isMobile?: boolean;
};

function LinkMenu({ items, isMobile }: LinkMenuProps) {
  const mx = isMobile ? "mx-[-0.65rem]" : "";
  const activeClass = `${mx} flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary`;
  const defaultClass = `${mx} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`;
  return (
    <>
      {items.map((item, index) => (
        <Link key={index} href={item.href} className={item.active ? activeClass : defaultClass}>
          <item.icon className="h-4 w-4" />
          {item.name}
          {item.bagde && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{item.bagde}</Badge>
          )}
        </Link>
      ))}
    </>
  );
}

export default LinkMenu;