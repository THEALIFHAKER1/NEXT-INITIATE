import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import TextHack from "@/components/custom/Textdecryption"
import { Icons } from "@/components/icons/icons"
import { ModeToggle } from "@/components/theme/mode-toggle"

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-20 w-20" />
        <TextHack
          targetText={siteConfig.name}
          className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            Get Started
          </Link>
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}
