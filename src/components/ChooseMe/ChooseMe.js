import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/chooseMe.jpg'
const ChooseMe = () => {
  return (
    <section className="text-gray-600 body-font px-12 mt-8">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
          <img className="object-cover object-center rounded-tr-3xl rounded-bl-3xl" alt="hero" src={Image} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-900 uppercase">Why Choose Me</h1>
          <p className="mb-8 leading-relaxed text-justify">As a native, and a seasoned realtor professional, I recognize and value the trust my clients place in me and I strive every day to exceed their expectations.I brings fourteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. I provides quality service to build relationships with clients and more importantly, maintain those relationships by communicating effectively. I have been a leading top producer for over 18 years. My sales consistently rank in the top 1% of all Keller Williams Teams Internationally.</p>
          <div className="flex justify-center">
            <Link to='/about' className="text-blue-900 font-extrabold inline-flex items-center md:mb-2 lg:mb-0">Read more
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" sstrokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;