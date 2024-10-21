import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import img from "./stats-img/people.png"
import img2 from "./stats-img/expert.png"
import img3 from "./stats-img/checked.png"


const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-6 md:p-10 my-6 md:my-12 lg:my-12 xl:my-13">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <div className="col-span-1 md:col-span-3 lg:col-span-3 flex justify-center items-center flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={sectionRef}>
           
            <div className="h-[250px] w-[250px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform ">
             <div className='flex justify-center items-center'>
              <img className='object-cover max-h-20' src={img} alt="" />
             </div>
              <i className="fas fa-users text-4xl mb-4 text-gray-500"></i>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={689} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Happy Customers</p>
            </div>

            <div className="h-[250px] w-[250px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform ">
            <div className='flex justify-center items-center'>
              <img className='object-cover max-h-20' src={img2} alt="" />
             </div>
              <i className="fas fa-users-cog text-4xl mb-4 text-gray-500"></i>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={107} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Expert Chefs</p>
            </div>

            <div className="h-[250px] w-[250px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform over:scale-105">
            <div className='flex justify-center items-center'>
              <img className='object-cover max-h-20' src={img3} alt="" />
             </div>
              <i className="fas fa-check text-4xl mb-4 text-gray-500"></i>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={253} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Events Complete</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center">
          <div className='rounded-full w-full'>
            <iframe
              width="100%"
              height="415"
              className="rounded-lg mt-6"
              src="https://www.youtube.com/embed/V5w1OGknhlc?si=i3TJe6N0Bcsmosi4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
