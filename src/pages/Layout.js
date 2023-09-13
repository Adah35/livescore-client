import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AdsSection from './home/AdsSection'
import CountryList from './home/CountryList'
import TopAdsSection from './home/TopAdsSection'

const Layout = () => {
    return (
        <>
            <div className='container mx-auto px-3'>

                <div className='flex items-center  justify-center py-3 gap-3'>
                    <TopAdsSection />
                </div>
                <div className='flex gap-3 text-white'>
                    <div className='hidden lg:flex w-2/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>
                        <CountryList />
                    </div>
                    <div className='w-full lg:w-7/12 md:w-9/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>

                        <Outlet />
                    </div>
                    <div className='hidden lg:flex w-3/12 border-[1px] border-gray-300 px-2 py-3 rounded-lg'>
                        <AdsSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout