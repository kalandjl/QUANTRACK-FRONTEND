"use client";
import { ReactNode, useEffect, useState } from "react";
import OrganizationLoading from "./loading";
import OrganizationNav from "@/components/organization/OrganizationNav";
import { notFound, usePathname } from "next/navigation";
import organizations from "@/res/organizations";
import Organization from "@/lib/types/Organization";

interface OrganizationLayoutProps {
  children: ReactNode
}


const Layout = ({ children }: OrganizationLayoutProps) => {
  const path = usePathname();
  const id = path.split("/")[2]

  const fetchData = async () => {
    return organizations.find((org) => org.id === id)
  }

  const [data, setData] = useState<undefined | Organization>(undefined)

  useEffect(() => {
    if (id) {
      fetchData().then((fetchedData) => setData(fetchedData))
    }
  }, [id])


  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
        <header className="px-4 py-5">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-300">
                <span className="italic text-white">{`"${data?.name}"`}</span>
            </h1>
        </header>
        <div className="z-50">
            <OrganizationNav id={id} />
        </div>
        <div className="flex-1 flex flex-col transition-all duration-300">
            <main className="flex-1">
            <div className="h-full p-4 md:p-6 lg:p-8">
                <div className="h-full">
                  {children}
                </div>
            </div>
            </main>
        </div>
    </div>
    )
}

export default Layout