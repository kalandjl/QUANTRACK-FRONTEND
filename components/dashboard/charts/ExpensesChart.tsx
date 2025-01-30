"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    food: 100,
    marketing: 240,
    other: 50,
  },
  {
    name: 'Feb',
    food: 150,
    marketing: 200,
    other: 70,
  },
  {
    name: 'Mar',
    food: 200,
    marketing: 500,
    other: 100,
  },
  {
    name: 'Apr',
    food: 400,
    marketing: 100,
    other: 100,
  },
  {
    name: 'May',
    food: 200,
    marketing: 200,
    other: 300,
  },
  {
    name: 'Jun',
    food: 150,
    marketing: 100,
    other: 300,
  },
];

const ExpensesChart = () => {

    return (
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-zinc-400 text-sm">Expenses</h3>
                <div className="flex items-center gap-2">
                <span className="text-zinc-100 font-semibold">${'12,856.14'}</span>
                <span className="text-xs text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
                    Avg. $500 per month
                </span>
                </div>
            </div>
            <div className="h-[calc(100%-4rem)]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="food" stackId="a" fill="#8c8c8c" />
                        <Bar dataKey="marketing" stackId="a" fill="#b7b7b7" />
                        <Bar dataKey="other" stackId="a" fill="#e2e2e2" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
    )
}

export default ExpensesChart