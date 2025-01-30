'use client'
import { FC, useEffect, useState } from "react"
import DashboardVolunteersLoading from "@/app/dashboard/volunteers/loading"
import DashboardAnalyticsLoading from "@/app/dashboard/analytics/loading"

interface Props {
  children: React.ReactNode
}

const DashboardAnalyticsWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DashboardAnalyticsLoading />
  }

  return <>{children}</>
}

export default DashboardAnalyticsWithLoading 