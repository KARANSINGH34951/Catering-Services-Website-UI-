import React, { useRef, useEffect } from 'react';
import img from './Images/hero.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sHeroSection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from('.hero-text', {
        y: -200, 
        opacity: 0, 
        duration: 1.5, 
        ease: 'power2.out', 
        stagger: 0.3, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center', 
        },
      });

      
      gsap.fromTo(
        imgRef.current,
        { scale: 0.6 }, 
        {
          scale: 1, 
          duration: 0.7, 
          ease: 'power2.out', 
        }
      );
    }, containerRef); 
    return () => ctx.revert(); 
  }, []);

  return (
    <div
      ref={containerRef}
      className='grid grid-cols-1 md:grid-cols-2 mt-10 mx-4 sm:mx-8 md:mx-8 lg:mx-10 xl:mx-10 md:my-5 lg:my-5 w-full my-5 items-center justify-center'
    >
      <div className='flex flex-col items-center space-y-6 justify-center text-center md:pr-5 md:mt-6 lg:mt-4 xl:mt-4'>
        
        <h2 className="inline-block hero-text border-2 border-orange-500 py-1 rounded-full px-4 text-center mx-auto">
        WELCOME TO CATERSERV
        </h2>

        <h1 className='hero-text leading-tight font-bold text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>
          Book CaterServ For <br /> Your Dream Event
        </h1>

        <div className='flex gap-4 mt-5 justify-center'>
          <button className='rounded-full px-6 py-3 lg:px-8 lg:py-4 bg-stone-800 text-white hover:bg-stone-700 transition duration-300'>
            Book Now
          </button>
          <button className='rounded-full px-6 py-3 lg:px-8 lg:py-4 bg-stone-800 text-white hover:bg-stone-700 transition duration-300'>
            Know More
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center mt-3 md:mt-5 lg:mt-10 xl:mt-10'>
        <img
          ref={imgRef} 
          className='object-contain p-3 lg:p-5 xl:p-5 md:p-5 h-[460px] md:h-[610px] lg:h-[610px] xl:h-[610px] rounded-md'
          src={img}
          alt='Event planning with CaterServ'
        />
      </div>
    </div>
  );
};

export default HeroSection;
