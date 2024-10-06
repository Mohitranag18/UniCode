import React from 'react';
import hero_page_illustrationn from '../images/hero_page_illustrationn.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col items-center font-montserrat lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-auto px-6 py-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
          Unlock Your Academic Success with <span className="text-blue-600">Uni</span>
          <span className="text-green-600">Code</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 leading-relaxed">
          Access Courses, Notes, and Previous Year Questions Anytime, Anywhere.
        </p>
        <button className="text-lg font-semibold px-5 py-2 border-2 border-green-600 rounded-full bg-gray-100 text-green-600">
          Register Now
        </button>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-auto">
        <img
          src={hero_page_illustrationn}
          alt="Hero Image"
          className="h-auto w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Hero;
