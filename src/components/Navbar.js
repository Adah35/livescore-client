import React, { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaBars, FaDumbbell, FaDeleteLeft, FaPhoneVolume, FaX } from "react-icons/fa6";
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import { RiArrowDownFill, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';



const Dropdown = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    const contentMap = content.map((v, i) => {
        return (
            <div className='flex gap-6 px-6 py-4 items-start justify-start '>
                <div>
                    <h3>INFO</h3>
                    <ul>
                        {v.info.map((v, i) => <li>{v}</li>)}
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <h3>TEAMS</h3>
                    <ul>
                        {v.teams.map((v, i) => <li className='flex gap-3 py-2'><span><img src={v.ic} alt="" width={'24px'} /></span> {v.tn}</li>)}
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className=" " onMouseLeave={() => setOpen(false)} onMouseOver={() => setOpen(true)}>
            <Link className="flex items-center gap-3 px-4 py-2 hover:text-yellow-500 ">{title} <span>{open ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</span></Link>
            <div className={` absolute right-0 bg-[#07080e] shadow-2xl left-0 top-[100%]  ${open ? 'flex' : 'hidden'}`} >{contentMap}</div>
        </div>
    )
}

const epl = [
    {
        info: ['Table', 'Fixtures & results', 'Breaking News'],
        teams: [{
            ic: img9,
            tn: 'Manchester United'
        }, {
            ic: img1,
            tn: 'Liverpool'
        }, {
            ic: img11,
            tn: 'Manchester City'
        }, {
            ic: img7,
            tn: 'Chelsea'
        }, {
            ic: img3,
            tn: 'Arsenal'
        },]
    }]

const seriaA = [{
    info: ['Table', 'Fixtures & results', 'Breaking News'],
    teams: [{
        ic: img2,
        tn: 'Juventus'
    }, {
        ic: img12,
        tn: 'Inter'
    }, {
        ic: img10,
        tn: 'Milan'
    }, {
        ic: img11,
        tn: 'Napoli'
    },]
},]



const liga = [{
    info: ['Table', 'Fixtures & results', 'Breaking News'],
    teams: [{
        ic: img1,
        tn: 'Barcelona'
    }, {
        ic: img6,
        tn: 'Real Madrid'
    }, {
        ic: img7,
        tn: 'Atletico Madrid'
    }, {
        ic: img8,
        tn: 'Valencia'
    }, {
        ic: img9,
        tn: 'Sevilla'
    },]
},]

const Navbar = () => {
    const [model, setModel] = useState(false);

    return (
        <nav className="bg-slate-900 text-white">

            <div className="w-12/12 mx-auto px-4 ">
                <div className="flex items-center justify-between lg:justify-start gap-4 ">
                    <div className="flex py-3">
                        <img src={logo} alt="" width={'70px'} />
                    </div>
                    <div className=" space-x-4  relative hidden lg:flex " >
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Live Scores</a>
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Latest News</a>
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Transfers</a>
                        <Dropdown title={'Premier League'} content={epl} />
                        <Dropdown title={'La Liga'} content={liga} />
                        <Dropdown title={'Serie A'} content={seriaA} />
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2">Culture</a>
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2">GOALSTUDIO</a>
                        <a href="#" className="block  hover:text-yellow-500 px-4 py-2">More</a>
                    </div>

                    {model === true && (
                        <div className=" absolute right-0 bg-gray-900 lg:hidden top-[90px] h-auto w-[50%] py-10" >
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Live Scores</a>
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Latest News</a>
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2 borderAnimation">Transfers</a>
                            <Dropdown title={'Premier League'} content={epl} />
                            <Dropdown title={'La Liga'} content={liga} />
                            <Dropdown title={'Serie A'} content={seriaA} />
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2">Culture</a>
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2">GOALSTUDIO</a>
                            <a href="#" className="block  hover:text-yellow-500 px-4 py-2">More</a>
                        </div>
                    )

                    }
                    {model === false ? (<button className=' text-4xl lg:hidden text-white p-3 font-bold rounded-md' onClick={() => setModel(true)}><FaBars /></button>) : (<button className=' text-white lg:hidden text-4xl p-3 font-bold rounded-md' onClick={() => setModel(false)}><FaX /></button>)}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
