import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EventsNav = () => {
  const [ModelImage,setModelImage] = useState(null);

  const [activeTab, setActiveTab] = useState('tab-1');
  const eventsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    eventsRef.current.forEach((event, index) => {
      if (event) {
        gsap.fromTo(
          event,
          {
            opacity: 0,
            y: 100, 
          },
          {
            opacity: 1,
            y: 0, 
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: event,
              start: "top 80%", 
              toggleActions: "play none none reverse", 
              
            },
          }
        );
      }
    });
  }, [activeTab]);

  const handleImage = (img) => {
    setModelImage(img);
  }

  const closeModel = () => {
    setModelImage(null);
  }

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

      <div className="mt-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {getEvents().map((event, index) => (
          <div
            key={event.id}
            className="position-relative p-3 rounded-full"
            ref={(el) => (eventsRef.current[index] = el)}
          >
            <img className="rounded w-[310px] h-[330px]" src={event.image} alt={`Event ${event.id}`} onClick={()=> handleImage(event.image)} />
            <div className="event-overlay d-flex flex-column p-4">
              <a href={event.image} data-lightbox={`Event ${event.id}`} className="my-auto">
                <i className="fas fa-search-plus text-dark fa-2x"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {ModelImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">

          <div className="relative rounded-lg p-4 border-2 border-white">
                <img src={ModelImage} alt="Event" className="w-[450px] h-[450px] object-cover" />
                <button
                  onClick={closeModel}
                  className="absolute text-2xl font-bold right-2 px-2 py-3 text-white ">
                  x
                </button>
              </div>
          </div>
    ) }

    </div>
  );
};

export default EventsNav;
