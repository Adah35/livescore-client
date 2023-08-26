import React from 'react'
import AdsSection from './AdsSection'
import CountryList from './CountryList'
import { livescoreData, scheduleData } from './data'
import { RiArrowRightLine, RiArrowRightSFill, RiCalendarEventLine, RiCalendarLine, RiCalendarTodoLine, RiStarLine } from 'react-icons/ri'



import imgEng from '../../assets/england.jpg'
const Home = () => {
    const catLinks = 'bg-[#222] text-sm font-bold p-2 rounded-full'

    const schduleContent = scheduleData.map((v, i) => {
        return (
            <div className='text-[#AAAAAA] font-semibold text-xs flex flex-col items-center'>
                <span>{v.title}</span>
                <span>{v.date}</span>
            </div>
        )
    })
    const content = livescoreData.map((v, i) => {
        return (
            <div className='bg-[#181818] rounded-lg px-3 py-2 flex gap-3 items-center mt-2 mb-2'>
                <span className='text-gray-300 text-sm'>FT</span>
                <div className='w-full flex justify-between'>
                    <div className='text-[#AAAAAA]'>
                        <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={v.ic1} alt="" width={'24px'} /></span><span> {v.t1}</span></p>
                        <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={v.ic2} alt="" width={'24px'} /></span><span> {v.t2}</span></p>
                    </div>
                    <div className='text-[#fdfdfd] font-semibold flex flex-col'>
                        <span className=' mt-1 mb-1'>{v.t1s}</span>
                        <span className=' mt-1 mb-1'>{v.t2s}</span>
                    </div>
                </div>
                <div>
                    <span className='text-gray-300'><RiStarLine /></span>
                </div>
            </div>
        )
    })
    return (
        <div className='container mx-auto px-3'>
            <div className='flex items-center lg:justify-start justify-center py-3 gap-3'>
                <ul className='flex text-gray-300 gap-3 '>
                    <li className={`bg-white text-[#222] font-bold p-2 rounded-full text-sm`}>Football</li>
                    <li className={`${catLinks}`}>Hockey</li>
                    <li className={`${catLinks}`}>Basketball</li>
                    <li className={`${catLinks}`}>Tennis</li>
                    <li className={`${catLinks} `}>Cricket</li>
                </ul>
            </div>
            <div className='flex gap-3 text-white'>
                <div className='hidden lg:flex w-3/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <CountryList />
                </div>
                <div className='w-full lg:w-6/12 md:w-9/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <div>
                        <div className='flex justify-between px-2 py-3 border-b-[1px]  border-[#222]'>
                            <span className='bg-[#AAAAAA] text-[#222] inline p-2 text-sm rounded-xl font-bold'>LIVE</span>
                            {schduleContent}
                            <span className='text-[#AAAAAA] inline  text-2xl p-2 rounded-xl font-bold'><RiCalendarTodoLine /></span>
                        </div>
                        <div className='flex items-center gap-3 mt-2 mb-2 justify-between px-2'>
                            <div className='flex items-center gap-3 justify-between'>
                                <img src={imgEng} alt="" width={'24px'} />
                                <span>
                                    <p>Premier League</p>
                                    <p className='text-sm'>England</p>
                                </span>
                            </div>
                            <span><RiArrowRightSFill /></span>
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex w-3/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <AdsSection />
                </div>
            </div>
        </div>
    )
}

export default Home