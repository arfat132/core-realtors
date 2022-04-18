import React from 'react';
import ChooseMe from '../ChooseMe/ChooseMe';
import IconGroup from '../IconsGroup/IconGroup';
import Services from '../Services/Services';
import Banner from './Banner/banner.jpg';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='home-banner z-0'>
                <img className='absoulate w-100' src={Banner} alt="" />
                <div className='sm:px-4 lg:px-40 sm:top-[-350px] lg:top-[-440px] relative sm:mb-1 lg:mb-6 text-white sm:ml-0 lg:ml-20 z-0 text-center'>
                <h1 className='sm:text-xs lg:text-5xl text-white font-bold sm:mb-1 lg:mb-6'>Best Way To Find Your Dream House</h1>
                <p className='sm:text-sm lg:text-lg '>My goal is to combine knowledge, passion and skills to exceed each clients expections, and most of all, to show genuinely care. If you are curious about available houses or land in the New York City, you pick the right place to start.</p>
               </div>
            </div>
            <IconGroup></IconGroup>
            <ChooseMe></ChooseMe>
            <Services></Services>
        </div>
    );
};

export default Home;