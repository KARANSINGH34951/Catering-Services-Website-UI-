import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

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
    <div className="shadow-sm py-4 md:py-6 lg:py-5 xl:py-5">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4 px-6 md:px-5 lg:px-5 xl:px-6">
          
          <a href="index.html" className="text-5xl font-bold text-primary">
            <h1><span className='text-[#d4a762]'>Cater</span><span className="text-black">Serv</span></h1>
          </a>

         
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

            <a href="index.html" className="block px-4 py-2 text-[#d4a762]">Home</a>
            <a href="about.html" className="block px-4 py-2 text-black">About</a>
            <a href="service.html" className="block px-4 py-2 text-black">Services</a>
            <a href="event.html" className="block px-4 py-2 text-black">Events</a>
            <a href="menu.html" className="block px-4 py-2 text-black">Menu</a>
            <a href="contact.html" className="block px-4 py-2 text-black">Contact</a>

            <div className="relative">
              <button onClick={toggleDropdown} className="block px-4 py-2 text-black">
                Pages
                <svg className="w-4 h-4 ml-1 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-1 bg-white shadow-md rounded-md">
                  <a href="book.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Booking</a>
                  <a href="blog.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Blog</a>
                  <a href="team.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                  <a href="testimonial.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</a>
                  <a href="404.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</a>
                </div>
              )}
            </div>
          </div>

      
          <div className="hidden md:flex justify-center items-center space-x-6 flex-grow text-lg">
            <a href="index.html" className="nav-item text-[#d4a762] nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Services</a>
            <a href="event.html" className="nav-item nav-link">Events</a>
            <a href="menu.html" className="nav-item nav-link">Menu</a>
            <a href="contact.html" className="nav-item nav-link">Contact</a>

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
                  <a href="book.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Booking</a>
                  <a href="blog.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Blog</a>
                  <a href="team.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                  <a href="testimonial.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</a>
                  <a href="404.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Page</a>
                </div>
              )}
            </div>
          </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-black bg-[#d4a762] h-12 w-12 rounded-full ">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <a href="book.html" className="text-lg py-3 px-5 rounded-full bg-primary text-black bg-[#d4a762]">Book Now</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
