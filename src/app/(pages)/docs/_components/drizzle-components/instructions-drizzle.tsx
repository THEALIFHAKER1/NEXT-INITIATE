import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function InstructionsDrizzle() {
  return (
    <>
      <div className=" w-fit rounded-xl bg-background/50 p-4">
        <p>1. First of all, Create a Postgres database</p>
        <div>
          <li>
            In{" "}
            <Link
              href={"https://vercel.com/dashboard"}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-0 p-0 text-blue-500"
              )}
            >
              your dashboard on Vercel
            </Link>
            , create or select the project you want to work with
          </li>
          <li>Select the Storage tab, then select the Connect Store button</li>
          <li>Select Postgres</li>
          <li>
            Enter a database name. It can only contain alphanumeric letters
            (including &quot;_&quot; and &quot;-&quot;) and can&apos;t exceed 32
            characters. We&apos;ll choose <b>&quot;pets_postgres_db&quot;</b>
          </li>
          <li>
            Select a region. If your project has Edge or Serverless Functions,
            choose an option near their regions for faster responses
          </li>
          <li>Select Create and Continue</li>
          <li>
            In the next view, on quickstart tabs choose{" "}
            <b>&quot;.env.local&quot;</b>
          </li>
          <li>
            Copy the connection string and paste it into the{" "}
            <b>&quot;.env&quot;</b> file
          </li>
        </div>
        <Link
          href={"https://vercel.com/docs/storage/vercel-postgres/quickstart"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "link" }),
            "p-0 text-blue-500"
          )}
        >
          Learn more
        </Link>
      </div>
      <div className=" w-fit rounded-xl bg-background/50 p-4">
        <p>2. change predifine drizzle database</p>
        <div>
          <li>on your IDE open find and replace</li>
          <li>
            find <b>&quot;NEXT-INITIATE_&quot;</b> and replace with{" "}
            <b>&quot;pets_postgres_&quot;</b>
          </li>
          <li>
            At this point you should modified the drizzle schema to your need
            located at <b>&quot;src/server/db/schema.ts&quot;</b>
          </li>
          <li>
            do <b>&quot;npm db:push&quot;</b> or your prefered package managers
          </li>
        </div>
      </div>
    </>
  )
}

export default InstructionsDrizzle
