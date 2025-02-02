'use client'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { HomeIcon, CalendarIcon, UsersIcon, ChartPieIcon, PlusIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline'

interface DashboardSidebarProps {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

const DashboardSidebar = ({ isCollapsed, setIsCollapsed }: DashboardSidebarProps) => {
  const menuItems = [
    { icon: HomeIcon, href: '/dashboard', label: 'Home' },
    { icon: CalendarIcon, href: '/dashboard/events', label: 'Events' },
    { icon: UsersIcon, href: '/dashboard/volunteers', label: 'Volunteers' },
    { icon: ChartPieIcon, href: '/dashboard/analytics', label: 'Analytics' },
    { icon: PlusIcon, href: '/dashboard/new', label: 'Add New' },
  ]

  return (
    <>
      {/* Mobile toggle - moved to right side */}
      <button 
        className={`
          md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg 
          bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 
          hover:text-zinc-100 transition-all duration-300
        `}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Bars3Icon className="w-5 h-5" />
      </button>

      <aside className={`
        fixed md:relative w-20 bg-zinc-800/50 backdrop-blur-sm border-r border-zinc-700/50 
        h-screen z-40 transition-transform duration-300
        ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}
        md:translate-x-0
      `}>
        <nav className="flex flex-col h-full py-6">
          {/* Logo area */}
          <div className="px-4 mb-4">
            {/* Logo */}
          </div>

          {/* Main menu items - centered */}
          <div className="flex-1 px-3">
            <div className="flex flex-col items-center space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="group relative w-full">
                  <Link
                    href={item.href}
                    className="flex justify-center p-2 rounded-lg text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-100 transition-colors duration-200"
                  >
                    <item.icon className="w-6 h-6" />
                  </Link>
                  <div className="absolute left-full top-2 ml-2 px-2 py-1 bg-zinc-800 text-zinc-100 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom buttons - centered */}
          <div className="px-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="group relative w-full">
                <button className="w-full flex justify-center p-2 rounded-lg text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-100 transition-colors duration-200">
                  <Cog6ToothIcon className="w-6 h-6" />
                </button>
                <div className="absolute left-full top-2 ml-2 px-2 py-1 bg-zinc-800 text-zinc-100 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  Settings
                </div>
              </div>
              <div className="group relative w-full">
                <button className="w-full flex justify-center p-2 rounded-lg text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-100 transition-colors duration-200">
                  <ArrowRightOnRectangleIcon className="w-6 h-6" />
                </button>
                <div className="absolute left-full top-2 ml-2 px-2 py-1 bg-zinc-800 text-zinc-100 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default DashboardSidebar 