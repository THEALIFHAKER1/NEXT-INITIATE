import { Icons } from "@/components/icons/icons"

import InstructionsDrizzle from "./instructions-drizzle"
import TextExample from "./text-example"

export default function DrizzleComponents() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-2 rounded-xl bg-foreground/20 p-5">
        <TextExample />
      </div>

      <div className="grid gap-2 rounded-xl bg-foreground/20 p-5">
        <p className="flex w-fit gap-2 rounded-xl bg-destructive p-4 text-center align-middle font-bold">
          <Icons.danger className="h-5 w-5" />
          This template uses the default Vercel Postgres.
        </p>
        <InstructionsDrizzle />
        <p className="bg-success flex w-fit gap-2 rounded-xl p-4 text-center align-middle font-bold">
          <Icons.success className="h-5 w-5" />
          Done
        </p>
      </div>
    </div>
  )
}
