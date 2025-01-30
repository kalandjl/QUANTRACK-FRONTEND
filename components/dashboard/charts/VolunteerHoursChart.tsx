'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', hours: 4 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 6 },
  { day: 'Thu', hours: 4 },
  { day: 'Fri', hours: 5 },
  { day: 'Sat', hours: 7 },
  { day: 'Sun', hours: 8 },
]

const VolunteerHoursChart = () => {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-sm">Total volunteer hours</h3>
        <div className="flex items-center space-x-2">
          <span className="text-zinc-100">37 hours</span>
          <span className="text-xs text-zinc-400">Avg. 148h/month</span>
        </div>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
            <XAxis dataKey="day" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Bar dataKey="hours" fill="#e4e4e7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VolunteerHoursChart 