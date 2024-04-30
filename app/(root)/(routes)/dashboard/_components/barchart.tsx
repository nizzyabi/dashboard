'use client'

import { CandlestickChart } from 'lucide-react'
import {
    BarChart as BarGraph,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Bar
} from 'recharts'

const salesData = [
    {
        month: "Jan",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Feb",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Mar",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Apr",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "May",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Jun",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Jul",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Aug",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Sep",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Oct",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Nov",
        total: Math.floor(Math.random() * 1000)
    },
    {
        month: "Dec",
        total: Math.floor(Math.random() * 1000)
    }
]

export const BarChart = () => {
    return (
        <div className='bg-slate-100/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-5 text-slate-100'>
            <section className='flex justify-between gap-2 text-slate-100 pb-2'>
                <p>Sales Data</p>
                <CandlestickChart className='h-4 w-4' />
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarGraph data={salesData} margin={{top: 0, bottom: 0, right: 0, left: -15}}>

                <XAxis 
                    dataKey={"month"}
                    tickLine={false}
                    axisLine={true}
                    stroke='#FFFFFF'
                    fontSize={13}
                    padding={{ left: 0, right: 0}}
                />
                <YAxis 
                    dataKey={"total"}
                    tickLine={false}
                    axisLine={true}
                    stroke='#FFFFFF'
                    fontSize={13}
                    padding={{ top: 0, bottom: 0}}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey={"total"} radius={[5, 5, 0, 0]} stroke='#ffffff' fill='#ffffff'/>
               </BarGraph>
            </ResponsiveContainer>
        </div>
    )
}