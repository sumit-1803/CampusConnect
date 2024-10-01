import React from 'react'

const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View all</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-lamaSkyLight rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2025-02-23</span>
                    </div>
                        <p className='text-sm text-gray-400 mt-1'>This is the description for this event</p>
                </div>
                <div>
                    <div className='bg-lamaPurpleLight rounded-md p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2025-02-23</span>
                        </div>
                            <p className='text-sm text-gray-400 mt-1'>This is the description for this event</p>
                    </div>
                </div>
                <div>
                    <div className='bg-lamaYellowLight rounded-md p-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2025-02-23</span>
                        </div>
                            <p className='text-sm text-gray-400 mt-1'>This is the description for this event</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements