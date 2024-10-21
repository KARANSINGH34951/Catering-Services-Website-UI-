import React, { useState, useEffect, useRef } from 'react';
import img from "../Events/Events-img/image.png";
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
        ease: "power3.out", 
        stagger: 0.2, 
        delay:0.3 ,
        scrollTrigger: {
          trigger: eventsRef.current, 
          start: "top 80%", 
        },
      }
    );
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const allEvents = [
    { id: 1, image: "https://themewagon.github.io/CaterServ/img/event-1.jpg" },
    { id: 2, image: "https://themewagon.github.io/CaterServ/img/event-2.jpg" },
    { id: 3, image: "https://themewagon.github.io/CaterServ/img/event-3.jpg" },
    { id: 4, image: "https://themewagon.github.io/CaterServ/img/event-4.jpg" },
    { id: 5, image: "https://themewagon.github.io/CaterServ/img/event-5.jpg" },
    { id: 6, image: "https://themewagon.github.io/CaterServ/img/event-6.jpg" },
    { id: 7, image: "https://themewagon.github.io/CaterServ/img/event-7.jpg" },
    { id: 8, image: "https://themewagon.github.io/CaterServ/img/event-8.jpg" },
  ];

  const weddingEvents = [
    { id: 1, image: "https://themewagon.github.io/CaterServ/img/event-1.jpg" },
    { id: 2, image: "https://themewagon.github.io/CaterServ/img/event-7.jpg" },
  ];

  const corporateEvents = [
    { id: 1, image: "https://themewagon.github.io/CaterServ/img/event-3.jpg" },
    { id: 2, image: "https://themewagon.github.io/CaterServ/img/event-4.jpg" },
  ];

  const cocktailEvents = [
    { id: 1, image: "https://themewagon.github.io/CaterServ/img/event-5.jpg" },
    { id: 2, image: "https://themewagon.github.io/CaterServ/img/event-6.jpg" },
  ];

  const buffetEvents = [
    { id: 1, image: "https://themewagon.github.io/CaterServ/img/event-7.jpg" },
    { id: 2, image: "https://themewagon.github.io/CaterServ/img/event-8.jpg" },
  ];

  const getEvents = () => {
    switch (activeTab) {
      case 'tab-1':
        return allEvents;
      case 'tab-2':
        return weddingEvents;
      case 'tab-3':
        return corporateEvents;
      case 'tab-4':
        return cocktailEvents;
      case 'tab-5':
        return buffetEvents;
      default:
        return [];
    }
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
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-2' ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-2')}
          >
            <span className="w-32">Wedding</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-3' ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-3')}
          >
            <span className="w-32">Corporate</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-4' ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-4')}
          >
            <span className="w-32">Cocktail</span>
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className={`flex justify-center py-2 px-4 rounded-full border ${
              activeTab === 'tab-5' ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-blue-500'
            } cursor-pointer`}
            onClick={() => handleTabClick('tab-5')}
          >
            <span className="w-32">Buffet</span>
          </a>
        </li>
      </ul>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {getEvents().map((event, index) => (
          <div
            key={event.id}
            className="position-relative p-3 rounded-full"
            ref={(el) => (eventsRef.current[index] = el)}
          >
            <img className="rounded w-[310px] h-[330px]" src={event.image} alt={`Event ${event.id}`} />
            <div className="event-overlay d-flex flex-column p-4">
              <a href={event.image} data-lightbox={`Event ${event.id}`} className="my-auto">
                <i className="fas fa-search-plus text-dark fa-2x"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsNav;
