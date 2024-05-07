import {
  Home,
  LineChart,
  LucideIcon,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

export type Icon = LucideIcon;

export const Icons = {
  home: Home,
  shoppingcart: ShoppingCart,
  package: Package,
  users: Users,
  lineChart: LineChart,
}

export interface Menu {
  href: string;
  name: string;
  icon: keyof typeof Icons;
  bagde?: number;
}

export const menuItems: Menu[] = [
  {
    href: "/",
    name: "Dashboard",
    icon: 'home',
  },
  {
    href: "/orders",
    name: "Orders",
    icon: 'shoppingcart',
    bagde: 9,
  },
  {
    href: "#",
    name: "Products",
    icon: 'package',
  },
  {
    href: "#",
    name: "Customers",
    icon: 'users',
  },
  {
    href: "#",
    name: "Analytics",
    icon: 'lineChart',
  },
]
