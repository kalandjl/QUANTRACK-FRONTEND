'use client'

import StatsCard from '@/components/dashboard/StatsCard'
import EventProgress from '@/components/dashboard/EventProgress'
import EventCategories from '@/components/dashboard/EventCategories'
import VolunteerHoursChart from '@/components/dashboard/VolunteerHoursChart'
import RevenueChart from '@/components/dashboard/RevenueChart'
import { UsersIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import DashboardWithLoading from '@/components/dashboard/DashboardWithLoading'

export default function DashboardPage() {
  const handleAddEvent = () => {
    console.log('Add new event clicked')
  }

  const handleAddMembers = () => {
    console.log('Add new members clicked')
  }

  return (
    <DashboardWithLoading>
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="shrink-0 h-16 flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Dashboard</h1>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 min-h-0">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto">
            {/* Left column */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="h-[160px]">
                  <StatsCard
                    title="Total volunteers"
                    value="182"
                    icon={UsersIcon}
                    action={{ label: 'Add new event', onClick: handleAddEvent }}
                  />
                </div>
                <div className="h-[160px]">
                  <StatsCard
                    title="Organization size"
                    value="14"
                    icon={BuildingOffice2Icon}
                    action={{ label: 'Add new members', onClick: handleAddMembers }}
                  />
                </div>
              </div>

              {/* Event sections */}
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="h-[200px]">
                  <EventProgress />
                </div>
                <div className="h-[200px]">
                  <EventCategories />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="h-[300px] md:flex-1"> {/* Fixed height on mobile, flex on desktop */}
                <VolunteerHoursChart />
              </div>
              <div className="h-[300px] md:flex-1"> {/* Fixed height on mobile, flex on desktop */}
                <RevenueChart />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="shrink-0 h-16 flex items-center justify-end">
          <span className="text-sm text-zinc-400">Dashboard v1.0</span>
        </footer>
      </div>
    </DashboardWithLoading>
  )
} 