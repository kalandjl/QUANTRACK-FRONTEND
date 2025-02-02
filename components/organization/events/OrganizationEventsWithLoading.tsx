'use client'
import { FC, useEffect, useState } from "react"
import OrganizationLoading from "@/app/org/[id]/loading"
import OrganizationEventsLoading from "@/app/org/[id]/events/loading"

interface Props {
  children: React.ReactNode
}

const OrganizationEventsWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <OrganizationEventsLoading />
  }

  return <>{children}</>
}

export default OrganizationEventsWithLoading 