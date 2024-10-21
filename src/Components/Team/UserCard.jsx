import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import share from "./Team-icon/share.png"
import facebook from "./Team-icon/facebook.png"
import twitter from "./Team-icon/twitter.png"
import instagram from "./Team-icon/instagram.png"

gsap.registerPlugin(ScrollTrigger);

const UserCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 1, 
        ease: 'power3.out', 
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', 
          toggleActions: 'play none none reverse', 
        },
      }
    );

    return () => {
     
      ScrollTrigger.getById(el?.id)?.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef} 
      className={`group relative text-center h-[443px] md:h-[483px] lg:h-[503px] xl:h-[503px] w-full max-w-[370px] md:max-w-[370px] mx-auto rounded-lg bg-black text-white my-5 overflow-hidden transition-all duration-500 ease-out`}
    >
      
      <img
        className="w-full h-[85%] object-cover rounded-t-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={props.img}
        alt="User"
      />

    
      <div className="space-y-1 my-4">
        <h3 className="text-lg md:text-xl font-semibold">{props.username}</h3>
        <h5>{props.message}</h5>
      </div>

   
      <div className="absolute top-0 right-0 flex flex-col items-center space-y-2 m-4">
       
        <a
          className="btn-md-square rounded-full bg-[#d4a762] p-2 opacity-100 transition-opacity duration-500"
          href="#"
        >
          <img
            src={share}
            alt="share"
            className="w-10 h-10"
          />
        </a>
        
        <div className="flex flex-col items-center space-y-2">
          <a
            className="rounded-full bg-[#d4a762] p-2 transform translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            href="#"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>
          <a
            className="rounded-full bg-[#d4a762] p-2 transform translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-400"
            href="#"
          >
            <img
              src={twitter}
              alt="Twitter"
              className="w-10 h-10"
            />
          </a>
          <a
            className="rounded-full bg-pink-600 p-2 transform translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-600"
            href="#"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
