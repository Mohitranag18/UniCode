import React from 'react';
import UniCodeLogo from '../images/UniCodeLogo.png';

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 bg-gray-100 h-16">
      <div className="h-16 w-36">
        <img src={UniCodeLogo} alt="UniCode" className="h-full w-full object-cover object-center" />
      </div>
      <div className="w-[40vw] flex justify-between">
        <h2 className="text-xl font-medium">Home</h2>
        <h2 className="text-xl font-medium">Courses</h2>
        <h2 className="text-xl font-medium">Notes</h2>
        <h2 className="text-xl font-medium">PYQs</h2>
      </div>
      <button className="text-lg font-semibold px-5 py-1 border-2 border-green-600 rounded-full bg-gray-100 text-green-600">
        Log in
      </button>
    </nav>
  );
};

export default Header;
