import React from 'react'
import { RiStarLine } from 'react-icons/ri'

const Livescore = ({ data }) => {
    return (
        // bg - white bg - opacity - 50 backdrop - blur - xl rounded drop - shadow - lg
        <div className=' border-b-gray-300 border-1 backdrop-blur-xl hover:bg-slate-200 shadow rounded-lg px-3 py-2 flex gap-3 items-center mt-2 mb-2'>
            <span className='text-gray-700 bg-gray-300 font-semibold p-2 rounded-lg text-sm'>{data.match_time}</span>
            <div className='w-full flex justify-between'>
                <div className='text-slate-700 font-semibold'>
                    <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={data.team_home_badge} alt="" width={'24px'} /></span><span> {data.match_hometeam_name}</span></p>
                    <p className='flex items-center gap-2 mt-1 mb-1'><span><img src={data.team_away_badge} alt="" width={'24px'} /></span><span> {data.match_awayteam_name}</span></p>
                </div>
                <div className='text-[#4f53d2] font-semibold flex flex-col'>
                    <span className=' mt-1 mb-1'>{data.match_hometeam_score}</span>
                    <span className=' mt-1 mb-1'>{data.match_awayteam_score}</span>
                </div>
            </div>
            <div className=''>
                <span className='text-gray-700 text-lg'><RiStarLine /></span>
            </div>
        </div>
    )
}

export default Livescore