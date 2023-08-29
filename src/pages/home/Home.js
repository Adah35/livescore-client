import React from 'react'
import AdsSection from './AdsSection'
import CountryList from './CountryList'
import { livescoreData, scheduleData } from './data'
import { RiArrowRightLine, RiArrowRightSFill, RiCalendarEventLine, RiCalendarLine, RiCalendarTodoLine, RiStarLine } from 'react-icons/ri'



import imgEng from '../../assets/england.jpg'
import TopAdsSection from './TopAdsSection'
const Home = () => {
    const catLinks = 'bg-[#222] text-sm font-bold p-2 rounded-full'

    const schduleContent = scheduleData.map((v, i) => {
        return (
            <div className='text-[#181818] font-bold text-xs flex flex-col items-center'>
                <span>{v.title}</span>
                <span>{v.date}</span>
            </div>
        )
    })
    const content = livescoreData.map((v, i) => {
        return (
            // bg - white bg - opacity - 50 backdrop - blur - xl rounded drop - shadow - lg
            <div className=' border-b-gray-300 border-1 backdrop-blur-xl hover:bg-slate-200 shadow rounded-lg px-3 py-2 flex gap-3 items-center mt-2 mb-2'>
                <span className='text-gray-700 bg-gray-300 font-semibold p-2 rounded-lg text-sm'>FT</span>
                <div className='w-full flex justify-between'>
                    <div className='text-slate-700 font-semibold'>
                        <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={v.ic1} alt="" width={'24px'} /></span><span> {v.t1}</span></p>
                        <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={v.ic2} alt="" width={'24px'} /></span><span> {v.t2}</span></p>
                    </div>
                    <div className='text-[#4f53d2] font-semibold flex flex-col'>
                        <span className=' mt-1 mb-1'>{v.t1s}</span>
                        <span className=' mt-1 mb-1'>{v.t2s}</span>
                    </div>
                </div>
                <div className=''>
                    <span className='text-gray-700 text-lg'><RiStarLine /></span>
                </div>
            </div>
        )
    })
    return (
        <div className='container mx-auto px-3'>
            <div className='flex items-center  justify-center py-3 gap-3'>
                <TopAdsSection />
            </div>



            <div className='flex gap-3 text-white'>
                <div className='hidden lg:flex w-2/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>
                    <CountryList />
                </div>





                <div className='w-full lg:w-7/12 md:w-9/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>
                    <div>
                        <div className='flex justify-between px-2 py-3 border-b-[1px]  border-gray-300'>
                            <span className='bg-[#AAAAAA] text-white inline p-2 text-sm rounded-xl font-bold'>LIVE</span>
                            {schduleContent}
                            <span className='text-gray-500 inline  text-2xl p-2 rounded-xl font-bold'><RiCalendarTodoLine /></span>
                        </div>
                        <div className='leagues my-3 '>
                            <div className='flex items-center gap-3 mt-2 mb-2 justify-between px-2 bg-slate-200 rounded-lg'>
                                <div className='flex items-center gap-3 justify-between  text-[#181818] font-bold'>
                                    <img src={imgEng} alt="" width={'24px'} className='shadow-lg' />
                                    <span>
                                        <p>Premier League</p>
                                        <p className='text-sm text-gray-400'>England</p>
                                    </span>
                                </div>
                                <span className='text-black'><RiArrowRightSFill /></span>
                            </div>
                            <div className=''>
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>
                    <AdsSection />
                </div>
            </div>
        </div>
    )
}

export default Home