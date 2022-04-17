import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/my-image.png'

const About = () => {
    return (
        <section className="text-gray-600 body-font px-24">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  rounded-tr-3xl rounded-bl-3xl border border-blue-900 ">
                    <img className="object-cover object-center rounded-tr-3xl rounded-bl-3xl" alt="hero" src={Image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-900 uppercase">About me</h1>
                    <p className="mb-8 leading-relaxed">A full-service realtor does everything from listing your house on the MLS for the right price to marketing your house and completing negotiations. They're known as full-service because they don't just pick and choose which services to provide, they offer the whole package.</p>
                </div>
            </div>
        </section>
    );
};

export default About;