import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <header className="bg-blue-900 text-white uppercase font-bold body-font shadow-md sticky z-11111 top-0">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link to="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" />
                    <span className=" text-xl text-white uppercase font-bold">Core Realtor</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-brown-400">Home</Link>
                    <Link to="/" className="mr-5 hover:text-teal-400">Services</Link>
                    <Link to="/about" className="mr-5 hover:text-teal-400">About</Link>
                    <Link to="/blog" className="mr-5 hover:text-teal-400">Blog</Link>
                    
                </nav>
                <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="/login" className='text-white uppercase font-bold'>Login</Link>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;