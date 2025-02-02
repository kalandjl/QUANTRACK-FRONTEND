import { ReactNode, Suspense } from "react"
import OrganizationLoading from "./loading"

interface OrganizationLayoutProps {
  children: ReactNode
}

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {

    return (
        <>
            <div className="flex h-screen bg-zinc-900 overflow-hidden">


                {/* Main content area */}
                <div className={`
                    flex-1 flex flex-col transition-all duration-300'
                `}>
                    <main className="flex-1 overflow-hidden">
                    <div className="h-full p-4 md:p-6 lg:p-8">
                        <div className="h-full overflow-y-auto">
                        <Suspense fallback={<OrganizationLoading />}>
                            {children}
                        </Suspense>
                        </div>
                    </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default OrganizationLayout