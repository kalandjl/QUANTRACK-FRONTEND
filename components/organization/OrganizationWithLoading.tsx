'use client'
import { FC, useEffect, useState } from "react"
import OrganizationLoading from "@/app/org/[id]/loading"

interface Props {
  children: React.ReactNode
}

const OrganizationWithLoading: FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <OrganizationLoading />
  }

  return <>{children}</>
}

export default OrganizationWithLoading 