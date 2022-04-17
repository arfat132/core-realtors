import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from './SignUp.png'
const SignUp = () => {
  ;
    return (

        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                < div class="lg:flex-grow md:w-1/2 lg:p-14 md:pl-16 mr-56 flex flex-col md:items-start md:text-left items-center text-center shadow-lg rounded-xl">
                    <form>
                        <div className='mb-6'>
                            <Link to="/login" className='text-blue-900 uppercase text-xl font-bold ml-10 mb-6'>Login</Link>
                            <Link to="/signup" className='text-blue-900 uppercase text-xl font-bold ml-40'>SignUp</Link>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <input type="email" id="email" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-md-light" placeholder="Enter Your Email" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300" placeholder="Enter Your Password">Your Password</label>
                            <input type="password" id="password" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-md-light" placeholder="Enter Your Password" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300" >Confirm Password</label>
                            <input type="password" id="password" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-md-light" placeholder="Confirm Password" required="" />
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="#" class="text-blue-900 hover:underline dark:text-teal-600">terms and conditions</Link></label>
                            </div>
                        </div>
                        <div class="flex items-center  mb-6">
                            <label for="terms" class="font-medium text-gray-900 dark:text-gray-300 ml-2"><Link to="#" class="text-blue-900 hover:underline dark:text-teal-600">Forget Password?</Link></label>
                            <button type="submit" class="text-white ml-40 bg-blue-900 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold uppercase rounded-lg text-sm px-4 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Sign Up</button>
                        </div>
                        </form>
                        </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={Image} />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SignUp;