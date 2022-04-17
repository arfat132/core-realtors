import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from './Login/Login.png';

const Login = () => {
    const navigate = useNavigate();
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                < div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    
                    <form className='login'>
                        <div>
                        <Link to="/login"  onClick={navigate('/login')} className='text-teal-500 text-xl font-bold ml-10 mb-6'>Login</Link>
                        <Link to="/signup"  onClick={navigate('/signup')} className='text-teal-500 text-xl font-bold ml-40'>SignUp</Link>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-lg-light" placeholder="name@flowbite.com" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" id="password" class="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-lg-light" required="" />
                        </div>
                        <div class="flex items-center  mb-6">
                            <label for="terms" class="font-medium text-gray-900 dark:text-gray-300"><a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Forget Password?</a></label>
                            <button type="submit" class="text-white ml-40 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold uppercase rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
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