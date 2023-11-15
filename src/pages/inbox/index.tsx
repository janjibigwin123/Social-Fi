import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Message from './message';
import BottomNav from '../components/bottom_nav';
import { Saira } from 'next/font/google';

const saira = Saira({
  weight: '400',
  subsets: ['latin']
})

const Inbox = () => {
  return (
    <div className={saira.className}>
      <Header />
      <div className='w-full bg-main-bg-color'>
        <div className='px-5 pt-6 flex max-w-[1240px] mx-auto justify-between gap-4 max-md:flex-col'>
          <Sidebar />
          <div className='flex flex-col gap-4 w-full'>
            <h2 className='font-medium text-[24px] leading-[32px]'>Messages</h2>
            <Message />
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default Inbox;