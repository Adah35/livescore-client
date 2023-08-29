import React from 'react'
import img from '../../assets/logo-removebg-preview.png'
const TopAdsSection = () => {
    return (
        <div className='rounded-lg px-10 flex items-center gap-2 justify-between  text-white bg-gradient-to-bl w-full  from-blue-600 to-yellow-500'>
            <div className='w-7/12'>
                <h1 className='font-bold my-2 text-2xl'>Download and get the app</h1>
                <p className='text-sm text-slate-300'>in every buisness computer  buisness computer  information ads</p>
                <button className='bg-blue-500 p-3 my-3 rounded-lg text-white'>Download</button>
            </div>
            <img src={img} alt="" className='' width={'200px'} />
        </div>
    )
}

export default TopAdsSection