'use client'
import { FC, useEffect, useState } from "react"
import OrganizationLoading from "@/app/org/[id]/loading"
import OrganizationVolunteersLoading from "@/app/org/[id]/volunteers/loading"

interface Props {
  children: React.ReactNode
}

const OrganizationVolunteersWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <OrganizationVolunteersLoading />
  }

  return <>{children}</>
}

export default OrganizationVolunteersWithLoading 