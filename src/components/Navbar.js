import React from 'react';
import logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-white">
            <div className="w-12/12 mx-auto px-4">
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <img src={logo} alt="" width={'70px'} />
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300 px-4 py-2">Home</a>
                        <a href="#" className="block px-4 py-2 hover:border-b-2">Premier League</a>
                        <a href="#" className="block px-4 py-2">La Liga</a>
                        <a href="#" className="block px-4 py-2">Serie A</a>
                        <a href="#" className="block px-4 py-2">Serie A</a>
                        <a href="#" className="block px-4 py-2">Culture</a>
                        <a href="#" className="block px-4 py-2">GOALSTUDIO</a>
                        <a href="#" className="block px-4 py-2">More</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
