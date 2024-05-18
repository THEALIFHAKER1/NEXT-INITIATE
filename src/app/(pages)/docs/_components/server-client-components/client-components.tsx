"use client"
interface ClientComponentsProps {
  children: React.ReactNode
}
export default function ClientComponents({ children }: ClientComponentsProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-foreground/50 p-5">
      <p>This is client component</p>
      {children}
    </div>
  )
}
