'use client'
import { FC } from 'react'
import Link from 'next/link'
import { AcademicCapIcon, BoltIcon, TruckIcon, UsersIcon } from '@heroicons/react/24/outline'

const EventCategories: FC = () => {
  const categories = [
    { name: 'Education', icon: AcademicCapIcon },
    { name: 'Awareness', icon: BoltIcon },
    { name: 'Logistics', icon: TruckIcon },
    { name: 'Participants', icon: UsersIcon },
  ]

  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-sm">Event categories</h3>
        <Link href="/categories" className="text-xs text-zinc-400 hover:text-zinc-300">
          Explore more →
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700/50 transition-colors"
          >
            <category.icon className="w-6 h-6 text-zinc-400" />
            <span className="text-xs text-zinc-400">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCategories