import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Message from './message';
import BottomNav from '../components/bottom_nav';
import { Saira } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './index.module.css'

const saira = Saira({
  weight: '400',
  subsets: ['latin']
})

const ChatInbox = () => {
  const router = useRouter();

  return (
    <div className={saira.className}>
      <Header />
      <div className='w-full bg-main-bg-color'>
        <div className='px-5 py-6 flex max-w-[1240px] mx-auto justify-between gap-4 max-md:flex-col'>
          <Sidebar />
          <div className='flex flex-col gap-4 max-md:mb-28 w-[300px] max-md:hidden max-md:mb-100px'>
            <h2 className='font-medium text-[24px] leading-[32px]'>Messages</h2>
            <Message />
          </div>
          <div className='flex flex-col justify-between bg-white flex-grow rounded-lg'>
            <div className='px-6 py-4 border border-l-0 border-r-0 border-t-0 border-border-color flex justify-between'>
              <div className='flex gap-2 items-center'>
                <div className='bg-main-bg-color border border-border-color p-2 rounded-full cursor-pointer hover:bg-white' onClick={() => {router.push('/inbox')}}>
                  <Image src={'/icons/arrow-left.svg'} width={100} height={100} alt='Icon' className='w-6 h-6' />
                </div>
                <Image src={'/avatars/default.svg'} width={100} height={100} alt='Icon' className='w-10 h-10 rounded-full' />
                <div className='flex flex-col justify-between '>
                  <h1 className='text-[#2D3748] font-semibold text-[18px] leading-[24px]'>
                    Trader Joe
                  </h1>
                  <h2 className='flex items-center text-grey-2 font-normal text-[12px] leading-[18px] gap-1'>
                    <span className='w-2 h-2 bg-[#38C585] rounded-full'></span>
                    <h1>
                      Online
                    </h1>
                  </h2>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-main-bg-color border border-border-color p-2 rounded-full cursor-pointer hover:bg-white'>
                  <Image src={'/icons/search.svg'} width={100} height={100} alt='Icon' className='w-6 h-6' />
                </div>
                <div className='bg-main-bg-color border border-border-color p-2 rounded-full cursor-pointer hover:bg-white'>
                  <Image src={'/icons/dots-vertical.svg'} width={100} height={100} alt='Icon' className='w-6 h-6' />
                </div>
              </div>
            </div>
            <div className='px-6 py-4 min-h-[400px] border border-l-0 border-r-0 border-t-0 border-border-color h-[calc(100vh-296px)] overflow-y-scroll flex flex-col gap-4 text-[14px] text-grey-5'>
              <div className='flex justify-center'>
                <span className='text-xs rounded-3xl px-2 py-1 bg-[#F5F6F8]'>Today</span>
              </div>
              <div className='flex gap-4 flex-col'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-4 items-center'>
                      <span className='text-grey-5 p-3 bg-[#F5F6F8] rounded-[10px]'>
                        Hi, hows going?
                      </span>
                      <Image src={'/icons/emoji-happy.svg'} width={100} height={100} alt='Icon' className='w-[18px] h-[18px] rounded-full cursor-pointer' />
                      <Image src={'/icons/dots-vertical.svg'} width={100} height={100} alt='Icon' className='w-[18px] h-[18px] rounded-full cursor-pointer' />
                  </div>
                  <div className='flex gap-4 items-center'>
                    <span className='text-grey-5 p-3 bg-[#F5F6F8] rounded-[10px]'>
                      I want to ask about how to swap and why we need power?
                    </span>
                  </div>
                  <h1 className='text-grey-2 text-[12px]'>09:12</h1>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-4 items-center'>
                    <span className='text-grey-5 p-3 bg-[#F5F6F8] rounded-[10px] relative'>
                      *about trading network power.
                      <div className='absolute right-0 bottom-[-70%] translate-y-[-50%] px-2 py-1 bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.14)] rounded-[100px]'>
                        ❤️  👍  👎  🔥  😄  😂
                      </div>
                    </span>
                  </div>
                  <h1 className='text-grey-2 text-[12px]'>09:50</h1>
                </div>
              </div>
              <div className='flex gap-4 flex-col'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-4 items-center flex-row-reverse'>
                      <span className='p-3 rounded-[10px] bg-secondary text-white'>
                        Hi, I am fine
                      </span>
                  </div>
                  <div className='flex gap-4 items-center flex-row-reverse'>
                    <span className='relative p-3 rounded-[10px] bg-secondary text-white'>
                      Yes, you can swap with paying you network power.
                      <div className='absolute right-0 bottom-[-70%] translate-y-[-50%] p-1 bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.14)] rounded-full'>
                        ❤️
                      </div>
                    </span>
                  </div>
                  <h1 className='text-grey-2 text-[12px] text-right pt-5'>10:12</h1>
                </div>
              </div>
              <div className='flex gap-4 flex-col'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-4 items-center'>
                      <span className='text-grey-5 p-3 bg-[#F5F6F8] rounded-[10px]'>
                        ...
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-6 py-4 border border-l-0 border-r-0 border-t-0 border-border-color flex gap-4 justify-between items-center'>
              <input type="text" className={`px-2 py-3 bg-main-bg-color rounded-lg bg-[url("/icons/emoji-happy.svg")] bg-right bg-no-repeat w-[-webkit-fill-available] ${styles.inputtype}`} placeholder='Type reply here' />
              <button className='px-5 py-3 rounded-lg bg-secondary max-sm:w-full'>
                <div className='flex gap-4 items-center justify-center sm:justify-start'>
                  <h1 className='text-white font-medium leading-[24px] text-center text-base'>
                    Send
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default ChatInbox;