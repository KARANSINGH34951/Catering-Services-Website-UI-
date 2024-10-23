import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="shadow-sm py-4 md:py-6 lg:py-3 xl:py-5 ">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-2 px-6 md:px-5 lg:px-5 xl:px-6">
          
          <Link to="/" className="text-5xl font-bold text-primary">
            <h1><span className='text-[#d4a762]'>Cater</span><span className="text-black">Serv</span></h1>
          </Link>

          <button
            onClick={toggleMenu}
            className="block md:hidden text-primary focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

          <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}>

            <Link to="/" className="block px-4 py-2 text-[#d4a762] font-Open Sans">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-black font-Open Sans">About</Link>
            <Link to="/service" className="block px-4 py-2 text-black font-Open Sans">Services</Link>
            <Link to="/event" className="block px-4 py-2 text-black font-Open Sans">Events</Link>
            <Link to="/menu" className="block px-4 py-2 text-black font-Open Sans">Menu</Link>
            <Link to="/contact" className="block px-4 py-2 text-black font-Open Sans">Contact</Link>

            <div className="relative">
              <button onClick={toggleDropdown} className="block px-4 py-2 text-black">
                Pages
                <svg className="w-4 h-4 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-1 bg-white  shadow-md rounded-md">
                  <Link to="/book" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-Open Sans">Booking</Link>
                  <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Blog</Link>
                  <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</Link>
                  <Link to="/testimonial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</Link>
                  <Link to="/404" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</Link>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center space-x-6 flex-grow text-lg">
            <Link to="/" className="nav-item text-[#d4a762] nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Services</Link>
            <Link to="/event" className="nav-item nav-link">Events</Link>
            <Link to="/menu" className="nav-item nav-link">Menu</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle inline-flex items-center"
              >
                Pages
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link to="/book" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Booking</Link>
                  <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Blog</Link>
                  <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</Link>
                  <Link to="/testimonial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</Link>
                  <Link to="/404" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</Link>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-black bg-[#d4a762] h-12 w-12 rounded-full ">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="/book" className="text-lg py-3 px-4 rounded-full bg-primary text-black bg-[#d4a762]">Book Now</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 
