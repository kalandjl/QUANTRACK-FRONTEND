'use client'
import { FC } from 'react'

const EventProgress: FC = () => {
  const months = ['February', 'March', 'April']
  
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
      <h3 className="text-zinc-400 text-sm mb-4">Event progress</h3>
      <div className="grid grid-cols-3 gap-4">
        {months.map((month) => (
          <div key={month} className="space-y-2">
            <span className="text-sm text-zinc-400">{month}</span>
            <div className="h-24 bg-zinc-800 rounded-lg border border-zinc-700"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventProgress