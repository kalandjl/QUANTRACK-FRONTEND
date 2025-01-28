'use client'

import { ReactNode, Suspense } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import { useState } from 'react'
import DashboardLoading from './loading'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - collapsible on mobile */}
      <div className="fixed md:relative z-50">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main content area */}
      <div className={`
        flex-1 flex flex-col transition-all duration-300
        ${isCollapsed ? 'pl-0 md:pl-20' : 'pl-[80px]'}
      `}>
        <main className="flex-1 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
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