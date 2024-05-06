import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react"

export interface Menu {
  href: string;
  name: string;
  icon: any;
  active?: boolean;
  bagde?: number;
}

export const menuItems: Menu[] = [
  {
    href: "#",
    name: "Dashboard",
    icon: Home,
    active: true,
  },
  {
    href: "#",
    name: "Orders",
    icon: ShoppingCart,
    bagde: 9,
  },
  {
    href: "#",
    name: "Products",
    icon: Package,
  },
  {
    href: "#",
    name: "Customers",
    icon: Users,
  },
  {
    href: "#",
    name: "Analytics",
    icon: LineChart,
  },
]
