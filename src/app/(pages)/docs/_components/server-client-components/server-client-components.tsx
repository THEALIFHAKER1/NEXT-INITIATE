import ClientComponent from "./client-components"
import ServerComponents from "./server-components"

export default function ServerClientComponents() {
  return (
    <div className="grid gap-2 rounded-xl bg-foreground/20 p-5">
      This is server component (parent)
      <ClientComponent>
        <ServerComponents />
      </ClientComponent>
    </div>
  )
}
