import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Image from './SignUp.png';
import auth from '../../Firebase/firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";
import GoogleLogo from '../../images/google.svg';

const SignUp = () => {
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
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
            setErrors({ ...errors, password: "Put uppercase, lowercase, number, special character 8 digit" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const handleConfirmPassword = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, confirmPassword: "" });
        } else {
            setErrors({ ...errors, confirmPassword: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
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
        const handleSignUp = (event) => {
            event.preventDefault();
            console.log(userInfo);
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        };


        useEffect(() => {
            const hookErrors = hookError || googleError || passwordResetError;
            if (hookErrors) {
                switch (hookErrors?.code) {
                    case "auth/user-not-found":
                        toast("User Not Found");
                        break;
                    default:
                        toast("Something went wrong");
                }
            }
        }, [hookError, googleError, passwordResetError]);

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";

        useEffect(() => {
            if (user) {
                navigate(from);
            }
        }, [user]);

        return (

            <div>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                        < div className="lg:flex-grow md:w-1/2 lg:p-14 md:pl-16 mr-56 flex flex-col md:items-start md:text-left items-center text-center shadow-lg rounded-xl">
                            <form onSubmit={handleSignUp}>
                                <div className='mb-6'>
                                    <Link to="/login" className='text-blue-900 uppercase text-xl font-bold ml-10 mb-6'>Login</Link>
                                    <Link to="/signup" className='text-blue-900 uppercase text-xl font-bold ml-40'>SignUp</Link>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm ml-4 font-medium text-gray-900">Your Email</label>
                                    <input
                                        onBlur={handleEmail}
                                        type="email"
                                        id="email"
                                        className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5"
                                        placeholder="Enter Your Email"
                                        required="" />
                                    {errors?.email && <p className="flex items-center text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-xl mt-1'> </TiDeleteOutline> {errors.email}</p>}
                                </div>
                                <div className="mb-6 relative">
                                    <label htmlFor="password" className="block mb-2 text-sm ml-4 font-medium text-gray-900 dark:text-gray-300" placeholder="Enter Your Password">Your Password</label>
                                    <input
                                        onBlur={handlePassword}
                                        type={showPass ? "text" : "password"}
                                        id="password"
                                        className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5   "
                                        placeholder="Enter Your Password"
                                        required="" />
                                    {errors?.password && <p className="flex text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-2xl'> </TiDeleteOutline> {errors.password}</p>}
                                    <p className="absolute top-10 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm ml-4 font-medium text-gray-900" >Confirm Password</label>
                                    <input
                                        onBlur={handleConfirmPassword}
                                        type='password'
                                        id="confirmPassword"
                                        className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 " placeholder="Confirm Password" required="" />
                                    {errors?.confirmPassword && <p className="flex items-center text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-xl mt-1'> </TiDeleteOutline> {errors.confirmPassword}</p>}
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-900 " required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-gray-900">I agree with the <Link to="" className="text-blue-900 hover:underline">terms and conditions</Link></label>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6">
                                    <label  htmlFor="terms" className="font-medium text-gray-900 ml-2"><button onClick={forgetPassword} className="text-blue-900 font-semibold hover:underline">Forget Password?</button></label>
                                    <button type="submit" className="text-white ml-40 bg-blue-900 hover:ring-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-900 font-bold uppercase rounded-lg text-sm px-4 py-2.5 text-center">Sign Up</button>
                                </div>
                                <div className='flex font-bold items-center my-3'>
                                    <hr className='border-blue-900 h-px w-full mr-2 mt-1' />
                                    <span>or</span>
                                    <hr className='border-blue-900 h-px w-full ml-2 mt-1' />
                                </div>
                                <button onClick={() => signInWithGoogle()} className="flex items-center justify-center shadow-md bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                            </form>
                        </div>
                        <ToastContainer />
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={Image} />
                        </div>
                    </div>
                </section>

            </div>
        );
    };

    export default SignUp;