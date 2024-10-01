"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Monday',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tuesday',
        present: 45,
        absent: 34,
    },
    {
        name: 'Wednusday',
        present: 53,
        absent: 23,
    },
    {
        name: 'Thursday',
        present: 45,
        absent: 23,
    },
    {
        name: 'Friday',
        present: 67,
        absent: 12,
    },
];



const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}}  tickLine={false}/>
                    <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px" , borderColor:"lightgray"}} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' />
                    <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="gold" stroke="purple"  />} legendType='circle' />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}

export default AttendanceChart