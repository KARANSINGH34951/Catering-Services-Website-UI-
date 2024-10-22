import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EventsNav = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const eventsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      eventsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: eventsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allEvents = [
    { id: 1, image: 'https://themewagon.github.io/CaterServ/img/event-1.jpg' },
    { id: 2, image: 'https://themewagon.github.io/CaterServ/img/event-2.jpg' },
    { id: 3, image: 'https://themewagon.github.io/CaterServ/img/event-3.jpg' },
    { id: 4, image: 'https://themewagon.github.io/CaterServ/img/event-4.jpg' },
    { id: 5, image: 'https://themewagon.github.io/CaterServ/img/event-5.jpg' },
    { id: 6, image: 'https://themewagon.github.io/CaterServ/img/event-6.jpg' },
    { id: 7, image: 'https://themewagon.github.io/CaterServ/img/event-7.jpg' },
    { id: 8, image: 'https://themewagon.github.io/CaterServ/img/event-8.jpg' },
  ];

  const getEvents = () => {
    switch (activeTab) {
      case 'tab-1':
        return allEvents;
      
      default:
        return [];
    }
  };

  const handleHover = (index) => {
    gsap.to(eventsRef.current[index], {
      backgroundColor: '#d4a762', 
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleLeave = (index) => {
    gsap.to(eventsRef.current[index], {
      backgroundColor: '#fff', 
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  return (
    <div className="text-center">
      <ul className="flex justify-center mb-5 space-x-4 flex-wrap">
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-1' ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-1')}
          >
            <span className="w-32">All Events</span>
          </a>
        </li>
       
      </ul>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {getEvents().map((event, index) => (
          <div
            key={event.id}
            className="relative p-3 rounded-lg shadow-lg overflow-hidden"
            ref={(el) => (eventsRef.current[index] = el)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            <img className="rounded w-[310px] h-[330px]" src={event.image} alt={`Event ${event.id}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsNav;
