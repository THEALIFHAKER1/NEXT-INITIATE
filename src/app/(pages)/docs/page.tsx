import CollapseComponents from "@/components/custom/collapse-components"
import { HeadingText } from "@/components/custom/heading-text"
import { ThemeSwitcher } from "@/components/custom/theme-switcher"

import ServerClientComponets from "./_components/server-client-components/server-client-components"

export default function DocsPage() {
  return (
    <>
      <nav className="flex items-center justify-between py-5 align-middle">
        <div>Documentation</div>
        <ThemeSwitcher />
      </nav>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext="best practices for building a server client components">
            SERVER CLIENT COMPONENTS
          </HeadingText>
        }
        contentComponent={<ServerClientComponets />}
      />
    </>
  )
}
