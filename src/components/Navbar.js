import React, { useEffect, useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";
import logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom';





const Navbar = () => {
    const [model, setModel] = useState(false);

    return (
        <nav className="">

            <div className="w-12/12 mx-auto px-4 text-gray-700 font-semibold shadow-lg">
                <div className="flex items-center justify-between lg:justify-start gap-4 ">
                    <div className="flex">
                        <img src={logo} alt="" width={'100px'} />
                    </div>
                    <div className=" space-x-4  relative hidden lg:flex " >
                        <Link to={'/'} className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Live Scores</Link>
                        <Link to={'news'} className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Latest News</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Transfers</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">Rumour</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">Prediction</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">Tipstar</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">Game</Link>
                    </div>

                    {model === true && (
                        <div className=" absolute right-0 bg-gray-900 lg:hidden top-[90px] h-auto w-[50%] py-10" >
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Live Scores</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Latest News</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Transfers</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">Rumour</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">Prediction</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">Tipstar</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">Game</Link>
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
