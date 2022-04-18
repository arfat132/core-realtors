import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import logo from '../../images/logo.png'


const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header className="bg-blue-900 text-white uppercase font-bold body-font shadow-md sticky z-11111 top-0">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link to="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" />
                    <span className=" text-xl text-white uppercase font-bold">Core Realtor</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" className={({isActive})=> isActive ? "mr-5 hover:text-neutral-300 text-neutral-300" : "text-white mr-5 hover:text-neutral-300"}>Home</NavLink>
                    <NavLink to="/" className="text-white mr-5 hover:text-neutral-300">Services</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive ? "mr-5 hover:text-neutral-300 text-neutral-300" : "text-white mr-5 hover:text-neutral-300"}>About</NavLink>
                    <NavLink to="/blogs" className={({isActive})=> isActive ? "mr-5 hover:text-neutral-300 text-neutral-300" : "text-white mr-5 hover:text-neutral-300"}>Blog</NavLink>

                </nav>
                {user?.uid ?
                    <button onClick={() => signOut(auth)} className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="" className='text-white uppercase font-bold'>LogOut</Link>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    :
                    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="/login" className='text-white uppercase font-bold'>Login</Link>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                }

            </div>
        </header>
    );
};

export default Header;