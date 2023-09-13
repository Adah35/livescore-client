import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import red from '../../assets/red.png'
import yellow from '../../assets/yellow.png'
import img from '../../assets/1.png'





const Summary = ({ fixture }) => {
    const [active, setActive] = useState(1)
    const [sdata, setDta] = useState([])
    console.log(fixture.events)


    const content = (
        <div align="center" className="grid grid-cols-1 divide-y">
            {!fixture.events
                ? null
                : fixture.events.map((event) => (
                    <div className='flex ' key={event.team.id}>
                        <div className='flex justify-between w-1/2 px-3 py-2 mb-2'>
                            <span className='text-gray-500 text-sm'>{event.time.elapsed}'</span>
                            {event.team.id == fixture.teams.home.id ?
                                <span>

                                    {
                                        event.type === "Goal" ? (
                                            <span className='flex flex-col'>
                                                <span className='font-semibold gap-3'>
                                                    <img src={img} alt='yellow' width={'25px'} /> {event.player.name}</span>
                                                <span className='text-gray-400 text-sm'>{event.assist.name}</span>
                                            </span>) :
                                            (<span className='flex gap-3'>
                                                <span className=''>{event.detail.includes('Yellow Card') ? <img src={yellow} alt='yellow' width={'15px'} /> : <img src={red} alt='red' width={'15px'} />}</span>
                                                <span className='font-semibold'>{event.player.name}</span>
                                            </span>)
                                    }

                                </span> : ''}

                        </div>
                        <div className='flex gap-3 w-1/2'>
                            <div className='flex gap-2'>
                                <span className='text-blue-500 font-semibold'>{fixture.goals.home}</span>
                                <span>-</span>
                                <span className='text-blue-500 font-semibold'>{fixture.goals.away}</span>

                            </div>
                            <span className='flex flex-col'>
                                {event.team.id == fixture.teams.away.id ?
                                    <span>

                                        {
                                            event.type === "Goal" ? (
                                                <span className='flex flex-col'>
                                                    <span className='font-semibold'>{event.player.name}</span>
                                                    <span className='text-gray-400 text-sm'>{event.assist.name}</span>
                                                </span>) :
                                                (<span className='flex flex-col'>
                                                    <span className='flex gap-3'>
                                                        <span className=''>{event.detail.includes('Yellow Card') ? <img src={yellow} alt='yellow' width={'15px'} /> : <img src={red} alt='red' width={'15px'} />}</span>
                                                        <span className='font-semibold'>{event.player.name}</span>
                                                    </span>
                                                </span>)
                                        }

                                    </span> : ''}
                            </span>
                        </div>
                    </div>

                ))}
        </div>

    )
    // const content = sdata?.forEach((v) => {
    //     console.log(v)
    //     return (
    //         <div className='flex '>
    //             <div className='flex justify-between w-1/2 px-3'>
    //                 <span className='text-gray-500 text-sm'>{v.time}'</span>
    //                 <span className='flex flex-col'>
    //                     <span className='font-semibold'>{v.home_scorer}</span>
    //                     <span className='text-gray-400 text-sm'>{v.home_assist}</span>
    //                 </span>
    //             </div>
    //             <div className='flex gap-3 w-1/2'>
    //                 <span className='text-blue-500 font-semibold'>{v.score}</span>
    //                 <span className='flex flex-col'>
    //                     <span className='font-semibold'>{v.away_scorer}</span>
    //                     <span className='text-gray-400 text-sm'>{v.away_assist}</span>
    //                 </span>
    //             </div>
    //         </div>
    //     )
    // })

    const commentary = (
        <h1 className='text-black'>COMMENTARY</h1>
    )
    return (
        <div className="p-4">
            <div className='flex gap-3'>
                <Link onClick={() => setActive(1)} className={` p-2 font-semibold ${active === 1 ? 'bg-blue-500 text-white  rounded-lg' : 'bg-transparent'}`}>Events</Link>
                <Link onClick={() => setActive(2)} className={` p-2 font-semibold ${active === 2 ? 'bg-blue-500 text-white rounded-lg' : 'bg-transparent'}`}>Commentary</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
                {active === 1 && content}
                {active === 1 && commentary}
            </div>
        </div >
    )
}

export default Summary