"use client"

import { motion as m } from "framer-motion"

const Loader = ({ loadingText }: { loadingText: string }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        y: "100dvh",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center font-sans focus:focus-visible:focus:outline-none"
    >
      <m.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: { duration: 2, ease: "easeInOut" },
        }}
        className="absolute inset-0 h-full w-full origin-left bg-orange-400"
      ></m.div>
      <span className="z-[1] animate-pulse font-sans text-8xl sm:text-[30vh]">
        {/* <SplitLetters text="+++++" delay={0.45} /> */}
        ++++
      </span>
      <span className="font-lg z-[1] font-mono uppercase">[{loadingText}]</span>
    </m.div>
  )
}
export default Loader
