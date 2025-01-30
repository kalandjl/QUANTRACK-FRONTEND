'use client'
import { ComponentType } from 'react'
import { IconProps } from '@heroicons/react/24/outline'

interface StatsCardProps {
  title: string
  value: string
  icon: ComponentType<IconProps>
  action?: {
    label: string
    onClick: () => void
  }
}

const StatsCard = ({ title, value, icon: Icon, action }: StatsCardProps) => {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-zinc-400 text-sm">{title}</h3>
        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700/50">
          <Icon className="w-5 h-5 text-zinc-100" />
        </div>
      </div>
      <div className="text-3xl font-bold text-zinc-100 flex-grow flex items-center mb-2">{value}</div>
      {action && (
        <button
          onClick={action.onClick}
          className="w-full bg-zinc-900 text-zinc-100 rounded-lg py-2 px-4 text-sm 
                   hover:bg-zinc-800 transition-colors duration-200 border border-zinc-700/50"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}

export default StatsCard 