import { SiteTypes } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteTypes = {
  name: "NEXT SERVE",
  author: "THEALIFHAKER1",
  description:
    "Next.js 14+ starter template with app router, shadcn/ui, typesafe env, icons and configs setup.",
  keywords: [
    "next",
    "react",
    "starter",
    "template",
    "router",
    "shadcn/ui",
    "typesafe",
    "env",
    "icons",
    "configs",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://ae1.tech",
  },
  links: {
    github: "https://github.com/THEALIFHAKER1/NEXT-SERVE",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/api/og`,
};
