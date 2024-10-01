"use client"
import { time } from 'console';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
    {
        id: 1,
        title: 'Event 1',
        time: '10:00 AM',
        description: 'This is the description of event 1'
    },
    {
        id: 2,
        title: 'Event 2',
        time: '11:00 AM',
        description: 'This is the description of event 2'
    },
    {
        id: 3,
        title: 'Event 3',
        time: '12:00 PM',
        description: 'This is the description of event 3'
    },
    {
        id: 4,
        title: 'Event 4',
        time: '1:00 PM',
        description: 'This is the description of event 4'
    },
    {
        id: 5,
        title: 'Event 5',
        time: '2:00 PM',
        description: 'This is the description of event 5'
    },
    {
        id: 6,
        title: 'Event 6',
        time: '3:00 PM',
        description: 'This is the description of event 6'
    },
    {
        id: 7,
        title: 'Event 7',
        time: '4:00 PM',
        description: 'This is the description of event 7'
    },
    {
        id: 8,
        title: 'Event 8',
        time: '5:00 PM',
        description: 'This is the description of event 8'
    },
    {
        id: 9,
        title: 'Event 9',
        time: '6:00 PM',
        description: 'This is the description of event 9'
    },
    {
        id: 10,
        title: 'Event 10',
        time: '7:00 PM',
        description: 'This is the description of event 10'
    },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded '>
            <Calendar onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Events</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
                {events.map((event) => (
                    <div key={event.id} className='p-5 rounded-md border-2 boder-gray-200 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple '>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                <p className='text-gray-400 text-xs'>{event.time}</p>
                            </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalender