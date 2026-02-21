"use client"

import { animate } from "animejs"
import { useEffect, useRef } from "react"

import { Icons } from "../icons/icons"

type LoaderProps = {
  loadingText?: string
}

export default function Loader({ loadingText }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const animation = animate(node, {
      opacity: [0, 1],
      duration: 500,
      ease: "inOutQuad",
    })

    return () => {
      animation.pause()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-center font-sans opacity-0 focus:focus-visible:focus:outline-hidden"
    >
      <span className="z-1 animate-pulse font-sans text-8xl sm:text-[30vh]">
        <Icons.logo className="h-32 w-32" />
      </span>
      {loadingText && (
        <span className="z-1 font-mono text-sm uppercase">
          [{loadingText}]
        </span>
      )}
    </div>
  )
}
