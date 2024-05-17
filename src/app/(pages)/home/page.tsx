import Link from "next/link"
import { siteConfig } from "@/configs/site"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import TextDecryption from "@/components/custom/text-decryption"
import { ThemeSwitcher } from "@/components/custom/theme-switcher"
import { Icons } from "@/components/icons/icons"

function HomePage() {
  return (
    <>
      <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center">
        <Icons.logo className="h-20 w-20" />
        <TextDecryption
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
          <ThemeSwitcher />
        </div>
      </div>
    </>
  )
}

export default HomePage
