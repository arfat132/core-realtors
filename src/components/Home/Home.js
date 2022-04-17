import React from 'react';
import ChooseMe from '../ChooseMe/ChooseMe';
import Services from '../Services/Services';
import Banner from './Banner/banner.jpg';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='home-banner'>
                <img className='absoulate w-100' src={Banner} alt="" />
                <h1 className='relative mb-6 text-3xl text-white font-bold text text-center'>Best Way To Find Your Dream House</h1>
                <p className='relative text-white text-center mx-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat libero placeat pariatur accusantium molestias reiciendis, necessitatibus voluptatem, veritatis quam explicabo quae exercitationem itaque error recusandae ducimus iure optio soluta iste ab. Consectetur deserunt vero modi doloribus optio quo perspiciatis illum vitae eligendi eum porro necessitatibus, odit, facere placeat aut!</p>
            </div>
            <ChooseMe></ChooseMe>
            <Services></Services>
        </div>
    );
};

export default Home;