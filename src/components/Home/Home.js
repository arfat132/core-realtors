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
                <div className='w-1/2 relative mb-6 text-white ml-20 z-0'>
                <h1 className='text-3xl text-white font-bold mb-6'>Best Way To Find Your Dream House</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat libero placeat pariatur accusantium molestias reiciendis, necessitatibus voluptatem, veritatis quam explicabo quae exercitationem itaque error recusandae ducimus iure optio soluta iste ab. Consectetur deserunt vero modi doloribus optio quo perspiciatis illum vitae eligendi eum porro necessitatibus, odit, facere placeat aut!</p>
               </div>
            </div>
            <IconGroup></IconGroup>
            <ChooseMe></ChooseMe>
            <Services></Services>
        </div>
    );
};

export default Home;