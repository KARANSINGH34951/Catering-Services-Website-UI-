import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import img from "./stats-img/people.png"
import img2 from "./stats-img/expert.png"
import img3 from "./stats-img/checked.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {

  gsap.fromTo(".statscard", 
    {scrollTrigger : ".statscard", y: 200, opacity: 0 },
    {
      y: 0,  
      opacity: 1,
      duration: 0.2, 
      ease: "power3.out",
      stagger: 0.2, 
      scrollTrigger: {
        trigger: ".statscard",
        start: "top 90%",  
        toggleActions: "play none none reverse",
      },
  }
  );

  gsap.fromTo(".youtubecard", 
    {scrollTrigger : ".youtubecard", y: 200, opacity: 0 },
    {
      y: 0,  
      opacity: 1,
      duration: 0.2, 
      ease: "power3.out",
      stagger: 0.2, 
      scrollTrigger: {
        trigger: ".youtubecard",
        start: "top 90%",  
        toggleActions: "play none none reverse",
      },
  }
  );

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
    <div className="container mx-auto p-6 my-6 md:my-12 lg:my-12 xl:my-13">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        
        
        <div className="col-span-1 md:col-span-3 lg:col-span-3 flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-6" ref={sectionRef}>
           
            <div className="statscard h-[250px] w-[230px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform">
              <div className='flex justify-center items-center'>
                <img className='object-cover max-h-20' src={img} alt="" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={689} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Happy Customers</p>
            </div>

            <div className="statscard h-[250px] w-[250px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform">
              <div className='flex justify-center items-center'>
                <img className='object-cover max-h-20' src={img2} alt="" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={107} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Expert Chefs</p>
            </div>

            <div className="statscard h-[250px] w-[250px] bg-[#d4a762] space-y-6 text-black p-6 rounded-lg text-center shadow-md transition-transform transform over:scale-105">
              <div className='flex justify-center items-center'>
                <img className='object-cover max-h-20' src={img3} alt="" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {inView ? <CountUp end={253} duration={3} /> : '0'}
              </h1>
              <p className="uppercase font-bold text-gray-600 mt-2">Events Complete</p>
            </div>
          </div>
        </div>

      
        <div className="youtubecard col-span-1 md:col-span-2 lg:col-span-2 flex justify-center items-center">
          <div className="rounded-full w-full">
            <iframe
              width="90%"
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
