import React, { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaBars, FaDumbbell, FaDeleteLeft, FaPhoneVolume, FaX } from "react-icons/fa6";
import logo from '../assets/logo-removebg-preview.png'
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




const Navbar = () => {
    const [model, setModel] = useState(false);

    return (
        <nav className="">

            <div className="w-12/12 mx-auto px-4 text-gray-700 font-semibold shadow-lg">
                <div className="flex items-center justify-between lg:justify-start gap-4 ">
                    <div className="flex">
                        <img src={logo} alt="" width={'70px'} />
                    </div>
                    <div className=" space-x-4  relative hidden lg:flex " >
                        <Link to={'/'} className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Live Scores</Link>
                        <Link to={'news'} className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Latest News</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Transfers</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">Culture</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">GOALSTUDIO</Link>
                        <Link className="block  hover:text-blue-500 px-4 py-2">More</Link>
                    </div>

                    {model === true && (
                        <div className=" absolute right-0 bg-gray-900 lg:hidden top-[90px] h-auto w-[50%] py-10" >
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Live Scores</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Latest News</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2 borderAnimation">Transfers</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">Culture</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">GOALSTUDIO</Link>
                            <Link className="block  hover:text-blue-500 px-4 py-2">More</Link>
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
