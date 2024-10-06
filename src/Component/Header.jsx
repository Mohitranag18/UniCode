import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu
import UniCodeLogo from '../images/UniCodeLogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="flex justify-between items-center font-montserrat px-10 bg-gray-100 h-16 relative">
      <div className="h-16 w-36">
        <img src={UniCodeLogo} alt="UniCode" className="h-full w-full object-cover object-center" />
      </div>
      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />} {/* Show times icon if menu is open */}
        </button>
      </div>
      {/* Navigation Links */}
      <div className={`w-[40vw] lg:flex justify-between items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-xl font-medium">Home</h2>
        <h2 className="text-xl font-medium">Courses</h2>
        <h2 className="text-xl font-medium">Notes</h2>
        <h2 className="text-xl font-medium">PYQs</h2>
        <button className="text-lg font-semibold px-5 py-1 border-2 border-green-600 rounded-full bg-gray-100 text-green-600">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Header;
