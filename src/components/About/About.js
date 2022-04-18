import React from 'react';
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
                    <p className="mb-8 leading-relaxed">Everyone needs to have work goals to push themselves further and have an actionable career roadmap charted out.I have a plan to Learn a new programming language within six months and write at least three full-featured programs using this language as well as finish an open-source project I started last year. The programming field is a broad and fast-evolving one. Aside from the regular norm of improving our programming skills and technical skills, there are many other things to achieve. So, setting a smart goal is beneficial for us as an individual and together as a team. </p>
                </div>
            </div>
        </section>
    );
};

export default About;