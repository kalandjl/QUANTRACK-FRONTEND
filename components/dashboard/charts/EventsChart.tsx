'use client'
import { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts'

const data = [
    { day: 'Jan', events: 1 },
    { day: 'Feb', events: 2 },
    { day: 'Mar', events: 2 },
    { day: 'Apr', events: 4 },
    { day: 'May', events: 1 },
    { day: 'Jun', events: 3 },
    { day: 'Jul', events: 2 },
  ]

const EventsChart = () => {

  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-sm">Events</h3>
        <div className="flex items-center gap-2">
          <span className="text-zinc-100 font-semibold">${'12,856.14'}</span>
          <span className="text-xs text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
            Avg. 2/month
          </span>
        </div>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
            <XAxis dataKey="day" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Bar dataKey="events" fill="#e4e4e7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default EventsChart