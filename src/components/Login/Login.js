import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/firebase.init';
import Image from './Login/Login.png';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";
import GoogleLogo from '../../images/google.svg';


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        general: "",
    });
    const [showPass, setShowPass] = useState(false);
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(
        auth
    )

    const handleEmail = (event) => {
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Please provide a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePassword = (event) => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Wrong Password" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const forgetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        };
    };
 
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(userInfo);
        signInWithEmail(userInfo.email, userInfo.password);
    };
    useEffect(() => {
        const hookErrors = hookError || googleError;
        if (hookErrors) {
            switch (hookErrors?.code) {
                case "auth/user-not-found":
                    toast("User Not Found");
                    break;
                default:
                    toast("Something went wrong");
            }
        }
    }, [hookError, googleError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                < div className="lg:flex-grow md:w-1/2 lg:p-16 md:pl-16 mr-56 flex flex-col md:items-start md:text-left items-center text-center shadow-lg rounded-xl">
                    
                    <form onSubmit={handleLogin} className='login'>
                        <div className='mb-6'>
                        <Link to="/login" className='text-blue-900 uppercase text-xl font-bold ml-10'>Login</Link>
                        <Link to="/signup" className='text-blue-900 uppercase text-xl font-bold ml-40'>SignUp</Link>
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm ml-4 font-medium text-gray-900">Your email</label>
                            <input
                                onBlur={handleEmail}
                                type="email" id="email"
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 " placeholder="name@flowbite.com" required="" />
                            {errors?.email && <p className="flex items-center text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-xl mt-1'> </TiDeleteOutline> {errors.email}</p>}
                        </div>
                        <div className="mb-6 relative">
                            <label for="password" className="block mb-2 text-sm ml-4 font-medium text-gray-900">Your password</label>
                            <input
                                onBlur={handlePassword}
                                type={showPass ? "text" : "password"}
                                id="password"
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-teal-500 focus:border-teal-500 block w-full  p-2.5 dark:bg-gray-700" required="" />
                            {errors?.password && <p className="flex text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-2xl'> </TiDeleteOutline> {errors.password}</p>}
                                <p className="absolute top-10 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        </div>
                        <div className="flex items-center  mb-6">
                            <label for="terms" className="font-medium text-gray-900 dark:text-gray-300 ml-2"><button onClick={forgetPassword} className="text-blue-900 font-semibold hover:underline">Forget Password?</button></label>
                            <button type="submit" className="text-white ml-40 bg-blue-900 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold uppercase rounded-lg text-sm px-3 py-2.5 text-center">Login</button>
                        </div>
                        <div className='flex font-bold items-center my-3'>
                                <hr className='border-blue-900 h-px w-full mr-2 mt-1' />
                                <span>or</span>
                                <hr className='border-blue-900 h-px w-full ml-2 mt-1'/>
                            </div>
                            <button onClick={() => signInWithGoogle()} className="flex items-center justify-center shadow-md bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
                    <img className='' src={Image} alt="" />
                </div>
            </div>
        </section>

    );
};

export default Login;