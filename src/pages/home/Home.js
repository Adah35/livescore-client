import React from 'react'
import AdsSection from './AdsSection'
import CountryList from './CountryList'

const Home = () => {
    const catLinks = 'bg-[#222] text-sm font-bold p-2 rounded-full'
    return (
        <div className='container mx-auto '>
            <div className='flex items-center py-3 gap-3'>
                <ul className='flex text-gray-300 gap-3'>
                    <li className={`${catLinks}`}>Football</li>
                    <li className={`${catLinks}`}>Hockey</li>
                    <li className={`${catLinks}`}>Basketball</li>
                    <li className={`${catLinks}`}>Tennis</li>
                    <li className={`bg-white text-[#222] font-bold p-2 rounded-full text-sm `}>Cricket</li>
                </ul>
            </div>
            <div className='flex gap-3 text-white'>
                <div className='w-3/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <CountryList />
                </div>
                <div className='w-6/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <h1>home</h1>
                </div>
                <div className='w-3/12 border-[1px] border-[#222] px-2 py-3 rounded-lg'>
                    <AdsSection />
                </div>
            </div>
        </div>
    )
}

export default Home