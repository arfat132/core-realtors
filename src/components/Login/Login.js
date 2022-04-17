import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from './Login/Login.png';

const Login = () => {
    const navigate = useNavigate();
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                < div class="lg:flex-grow md:w-1/2 lg:p-16 md:pl-16 mr-56 flex flex-col md:items-start md:text-left items-center text-center shadow-lg rounded-xl">
                    
                    <form className='login'>
                        <div className='mb-6'>
                        <Link to="/login"  onClick={()=> navigate('/login')} className='text-blue-900 uppercase text-xl font-bold ml-10'>Login</Link>
                        <Link to="/signup"  onClick={()=> navigate('/signup')} className='text-blue-900 uppercase text-xl font-bold ml-40'>SignUp</Link>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-lg-light" placeholder="name@flowbite.com" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" id="password" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-lg-light" required="" />
                        </div>
                        <div class="flex items-center  mb-6">
                            <label for="terms" class="font-medium text-gray-900 dark:text-gray-300 ml-2"><a href="#" class="text-blue-900 hover:underline dark:text-teal-600">Forget Password?</a></label>
                            <button type="submit" class="text-white ml-40 bg-blue-900 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold uppercase rounded-lg text-sm px-3 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Login</button>
                        </div>
                    </form>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
                    <img className='' src={Image} alt="" />
                </div>
            </div>
        </section>

    );
};

export default Login;