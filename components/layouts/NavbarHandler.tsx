'use client'
import { usePathname } from 'next/navigation'
import NavigationWrapper from '@/components/Layout/NavigationWrapper'
import Link from "next/link";

export default function NavbarHandler() {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isDashboard) return null
  return (
    <nav className="fixed top-0 w-full bg-zinc-900 border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Quantrack
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/signin" 
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 