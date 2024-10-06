import React from 'react';
import hero_page_illustrationn from '../images/hero_page_illustrationn.jpg';

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-[50vw] h-[calc(100vh-70px)] px-10 py-20">
        <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">
          Unlock Your Academic Success with <span className="text-blue-600">Uni</span>
          <span className="text-green-600">Code</span>
        </h1>
        <p className="text-xl mb-14 leading-8">
          Access Courses, Notes, and Previous Year Questions Anytime, Anywhere.
        </p>
        <button className="text-lg font-semibold px-5 py-1 border-2 border-green-600 rounded-full bg-gray-100 text-green-600">
          Register Now
        </button>
      </div>
      <div className="w-[50vw] h-[calc(100vh-70px)]">
        <img src={hero_page_illustrationn} alt="Hero Image" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
};

export default Hero;
