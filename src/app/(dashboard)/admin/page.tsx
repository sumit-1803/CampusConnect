import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalender from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* User cards */}
        <div className='flex gap-4 justify-between'>
          <UserCard type='Student' />
          <UserCard type='Teacher' />
          <UserCard type='Parent' />
          <UserCard type='Staff' />
        </div>
        <div>
          {/* Middle charts */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            {/* Count chart */}
            <div className='w-full lg:w-1/3 h-[450px]'>
              <CountChart />
            </div>
            {/* Attendance Chart */}
            <div className='w-full lg:w-2/3 h-[450px]'>
              <AttendanceChart />
            </div>
          </div>
          {/* Bottom Chart*/}
          <div className='w-full h-[500px]'>
            <FinanceChart />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8 '>
        <EventCalender />
        <Announcements />
      </div>
    </div>
  )
}

export default AdminPage