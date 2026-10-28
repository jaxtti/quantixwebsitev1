import type { ServerPlan } from "@/components/ServerListing";

export const DEALS: ServerPlan[] = [
  {
    id: "deal-1",
    title: "10-Core Intel Xeon Server",
    price: 139,
    availability: "Instant Available",
    location: "European Union",
    cpu: "Intel Xeon E5 2630v4 (10 x 2.20 GHz)",
    ram: "256 GB REG ECC",
    savePercent: 68,
    href: "/order/deals/10-core-xeon-eu",
  },
  {
    id: "deal-2",
    title: "10-Core Intel Xeon Server",
    price: 142,
    availability: "Instant Available",
    location: "European Union",
    cpu: "Intel Xeon E5 2630v4 (10 x 2.20 GHz)",
    ram: "256 GB REG ECC",
    savePercent: 63,
    href: "/order/deals/10-core-xeon-eu-2",
  },
  {
    id: "deal-3",
    title: "10-Core Intel Xeon Server",
    price: 145,
    availability: "Instant Available",
    location: "Australia (Sydney)",
    cpu: "Intel Xeon E5 2630v4 (10 x 2.20 GHz)",
    ram: "256 GB REG ECC",
    savePercent: 60,
    href: "/order/deals/10-core-xeon-au",
  },
  {
    id: "deal-4",
    title: "10-Core Intel Xeon Server",
    price: 155,
    availability: "Configurable Hardware",
    location: "United States (Central)",
    cpu: "Intel Xeon E5 2630v4 (10 x 2.20 GHz)",
    ram: "256 GB REG ECC",
    savePercent: 55,
    href: "/order/deals/10-core-xeon-us",
  },
];

export const PLANS: ServerPlan[] = [
  {
    id: "plan-1",
    title: "4-Core Ryzen VPS",
    price: 5,
    availability: "Instant Available",
    location: "European Union",
    cpu: "AMD Ryzen 9 5950X (4 x 3.4 GHz)",
    ram: "8 GB DDR4",
    href: "/order/vps/4-core",
  },
  {
    id: "plan-2",
    title: "6-Core Ryzen VPS",
    price: 6,
    availability: "Instant Available",
    location: "European Union",
    cpu: "AMD Ryzen 9 5950X (6 x 3.4 GHz)",
    ram: "12 GB DDR4",
    href: "/order/vps/6-core",
  },
  {
    id: "plan-3",
    title: "8-Core Ryzen VPS",
    price: 7,
    availability: "Instant Available",
    location: "Australia (Sydney)",
    cpu: "AMD Ryzen 9 5950X (8 x 3.4 GHz)",
    ram: "24 GB DDR4",
    href: "/order/vps/8-core",
  },
  {
    id: "plan-4",
    title: "12-Core Ryzen VPS",
    price: 8,
    availability: "Instant Available",
    location: "United States (Central)",
    cpu: "AMD Ryzen 9 5950X (12 x 3.4 GHz)",
    ram: "48 GB DDR4",
    href: "/order/vps/12-core",
  },
  {
    id: "plan-5",
    title: "10-Core Intel Xeon Dedicated",
    price: 139,
    availability: "Configurable Hardware",
    location: "United States (Central)",
    cpu: "Intel Xeon E5 2630v4 (10 x 2.20 GHz)",
    ram: "256 GB REG ECC",
    href: "/order/dedicated/10-core-xeon",
  },
];

export const ALL_PLANS: ServerPlan[] = [...DEALS, ...PLANS];

export function getPlanByHref(href: string): ServerPlan | undefined {
  return ALL_PLANS.find((plan) => plan.href === href);
}
