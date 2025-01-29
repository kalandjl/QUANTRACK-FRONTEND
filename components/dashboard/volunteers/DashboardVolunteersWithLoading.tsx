'use client'
import { FC, useEffect, useState } from "react"
import DashboardVolunteersLoading from "@/app/dashboard/volunteers/loading"

interface Props {
  children: React.ReactNode
}

const DashboardVolunteersWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DashboardVolunteersLoading />
  }

  return <>{children}</>
}

export default DashboardVolunteersWithLoading 