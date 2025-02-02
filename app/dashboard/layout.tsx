'use client'

import { ReactNode, Suspense } from 'react'
import { useState } from 'react'
import DashboardLoading from './loading'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-zinc-900 overflow-hidden">
      {/* Sidebar - collapsible on mobile */}
      <div className="fixed md:relative z-50">
        <DashboardSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content area */}
      <div className={`
        flex-1 flex flex-col transition-all duration-300
        ${isCollapsed ? 'pl-0 md:pl-20' : 'pl-[80px]'}
      `}>
        <main className="flex-1 overflow-hidden">
          <div className="h-full p-4 md:p-6 lg:p-8">
            <div className="h-full overflow-y-auto">
              <Suspense fallback={<DashboardLoading />}>
                {children}
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 