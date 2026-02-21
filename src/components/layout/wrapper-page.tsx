"use client"

import { animate } from "animejs"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useSessionStorage } from "usehooks-ts"

import Loader from "./loader"

export default function WrapperPage({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme)
  const [LoaderStatus, setLoaderStatus] = useSessionStorage("firstload", false)
  const [isMounted, setIsMounted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    if (isMounted && !LoaderStatus) {
      setTimeout(() => {
        setLoaderStatus(true)
      }, 2000)
    }

    setCurrentTheme(theme)
  }, [isMounted, LoaderStatus, setLoaderStatus, theme])

  useEffect(() => {
    const node = contentRef.current
    if (!node || !isMounted || !LoaderStatus) return

    const animation = animate(node, {
      opacity: [0, 1],
      duration: 750,
      ease: "inOutQuad",
    })

    return () => {
      animation.pause()
    }
  }, [pathname, currentTheme, isMounted, LoaderStatus])

  if (!isMounted || !LoaderStatus) {
    return <Loader />
  }

  return (
    <div
      key={`${pathname}-${currentTheme}`}
      ref={contentRef}
      className="h-full opacity-0"
    >
      {children}
    </div>
  )
}
