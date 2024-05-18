"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
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

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(true)
    }, 2000)
  }, [])

  if (!LoaderStatus) {
    return <Loader loadingText="Loading" />
  }
  return (
    <motion.div
      key={`${pathname}-${currentTheme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`h-full`}
    >
      {children}
    </motion.div>
  )
}
