import React, { useEffect } from 'react';
import img from './AboutUs-img/image.png';
import img2 from "./stats-img/up-arrow.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    
    gsap.fromTo(
      '.aboutus-img',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.aboutus-img',
          start: 'top 85%',
        },
      }
    );

   
    gsap.fromTo(
      '.aboutus-img img',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.aboutus-img img',
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 mx-4 my-6 p-4 md:p-10 lg:p-12 space-x-5 md:space-x-8 lg:space-x-10'>
      <div className='aboutus-img col-span-1 md:col-span-2 flex justify-center my-10'>
        <img
          className='object-cover h-[350px] w-full md:h-[500px] md:w-[500px] rounded-md'
          src={img}
          alt='About Us'
        />
      </div>

      <div className=' aboutus-img col-span-1 md:col-span-3 my-6 md:space-x-6 lg:space-x-6 xl:space-y-8 md:my-0 space-y-4'>
        <h2 className='text-left inline-block border-2 border-[#d4a762] py-2 px-5 rounded-full'>
          ABOUT US
        </h2>

        <h1 className='font-Playball text-3xl md:text-5xl lg:text-5xl'>
          Trusted By 200+ Satisfied Clients
        </h1>

        <p className='text-left'>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-4'>
        
          <li>Fresh and Fast Food Delivery</li>
          <li>24/7 Customer Support</li>
          <li>Easy Customization Options</li>
          <li>Delicious Deals for Delicious Meals</li>
        </ul>

        <div>
          <button className='rounded-full px-10 py-4 bg-slate-300 my-6'>
             About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
