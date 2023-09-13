import React, { useState } from 'react'
import { RiCamera3Line, RiFootballLine } from 'react-icons/ri'
import { Link, Outlet, useParams } from 'react-router-dom'
import Summary from './Summary';
import Stats from './Stats';
import Lineup from './Lineup';
import img from '../../assets/england.jpg'
import img3 from '../../assets/img3.png'
import img9 from '../../assets/img9.png'
import { useGetLivescoreQuery, useGetMatchEventQuery } from '../home/livescoreApislice';
import News from './News';
import Table from './Table';
import H2H from './H2H';
import { data } from '../../data'
import Info from './Info';


const MiniNavbar = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <div>
                <div className=' flex justify-between items-center'>
                    <div className='flex gap-2 '>
                        <img src="https://media-2.api-sports.io/flags/ru.svg" alt="country image" width={'24px'} />
                        <span className='text-gray-600 font-semibold'>
                            <h1>Second League - Group 1</h1>
                            <p className='text-sm text-gray-500'>Russia</p>
                        </span>
                    </div>
                    <div className='flex gap-3 text-lg'>
                        <RiCamera3Line />
                        <RiFootballLine />
                    </div>
                </div>
                <div className='rounded-lg  font-semibold flex justify-evenly p-4 shadow-xl'>
                    <div className='flex flex-col items-center '>
                        <img src='https://media-3.api-sports.io/football/teams/2002.png' alt="country image" width={'24px'} />

                        <span>Spartak Nalchik</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span>0 - 1</span>
                        <span>Full Time</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src='https://media-3.api-sports.io/football/teams/6796.png' alt="country image" width={'24px'} />
                        <span>Dinamo Stavropol</span>
                    </div>
                </div>



            </div>
        </div>
    )
}
const tabTitles = ['Info', 'Summary', 'Stats', 'Line-ups', 'Table', 'News', 'H2H'];

const Match = () => {
    const [activeTab, setActiveTab] = useState(1);

    const params = useParams();
    const matchID = params.matchID;

    const results = data.response.filter((match) => {
        // console.log(match);
        return match.fixture.id == matchID;
    });

    const fixture = results[0];
    console.log(results, matchID)
    // const { matchId } = useParams()
    // const {
    //     data: livescoreData,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error } = useGetMatchEventQuery(matchId)
    // console.log(livescoreData)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className='text-[#181818] p-3'>
            <MiniNavbar />
            <div>
                <ul className='flex justify-center py-3 font-bold'>
                    <li>{tabTitles.map((title, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`py-2 px-4 ${activeTab === index ? ' text-blue-600' : 'text-gray-500'
                                }`}
                        >
                            {title}
                        </button>
                    ))}</li>
                </ul>
            </div>
            <div>
                {activeTab === 1 && <Summary fixture={fixture} />}
                {activeTab === 0 && <Info fixture={fixture} />}
                {activeTab === 2 && <Stats data={'a'} />}
                {activeTab === 3 && <Lineup data={'a'} />}
                {activeTab === 4 && <Table data={fixture} />}
                {activeTab === 5 && <News data={'a'} />}
                {activeTab === 6 && <H2H fixture={fixture} />}
            </div>
        </div>
    )
}

export default Match