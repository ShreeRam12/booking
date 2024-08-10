import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Booking.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md navfont sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center p-5">
          <div className="flex justify-center items-center">
            <div className="hidden md:flex justify-center items-center md:space-x-8 md:ml-10">
              <a href="#" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="#" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Team</a>
              <FaSearch className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex justify-center items-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">Team</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
