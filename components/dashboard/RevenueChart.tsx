'use client'
import { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', amount: 1000 },
  { month: 'Feb', amount: 2000 },
  { month: 'Mar', amount: 1500 },
  { month: 'Apr', amount: 3000 },
  { month: 'May', amount: 2500 },
  { month: 'Jun', amount: 4000 },
]

const RevenueChart: FC = () => {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-sm">Event revenue</h3>
        <div className="flex items-center gap-2">
          <span className="text-zinc-100 font-semibold">${'12,856.14'}</span>
          <span className="text-xs text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
            Avg. $3,000/month
          </span>
        </div>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
            <XAxis 
              dataKey="month" 
              stroke="#71717a"
              axisLine={false}
              tickLine={false}
              dy={10}
              fontSize={12}
              tickMargin={8}
            />
            <YAxis 
              stroke="#71717a"
              axisLine={false}
              tickLine={false}
              dx={-10}
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
              tickMargin={8}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#e4e4e7"
              strokeWidth={2}
              dot={{ fill: '#e4e4e7', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#e4e4e7' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart