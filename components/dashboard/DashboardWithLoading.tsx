'use client'
import { FC, useEffect, useState } from "react"
import DashboardLoading from "@/app/dashboard/loading"

interface Props {
  children: React.ReactNode
}

const DashboardWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DashboardLoading />
  }

  return <>{children}</>
}

export default DashboardWithLoading 