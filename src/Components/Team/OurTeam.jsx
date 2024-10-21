import React, { useEffect, useRef } from 'react';
import UserCard from './UserCard';
import gsap from 'gsap';

const OurTeam = () => {
  const cardsRef = useRef([]); 

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "bounce.out",
          });
          observer.unobserve(entry.target); 
        }
      });
    });

    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div>
      <div className='py-4'>
        <h1 className='text-center text-2xl md:text-3xl font-bold'>Our Team</h1>
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center my-6 lg:mx-10'>
        <UserCard ref={(el) => (cardsRef.current[0] = el)} username="Karan Singh" message="Decoration Chef" img="https://themewagon.github.io/CaterServ/img/team-1.jpg" />
        <UserCard ref={(el) => (cardsRef.current[1] = el)} username="Rahul" message="Executive Chef" img="https://themewagon.github.io/CaterServ/img/team-2.jpg"/>
        <UserCard ref={(el) => (cardsRef.current[2] = el)} username="Jeeva" message="Kitchen Porter" img="https://themewagon.github.io/CaterServ/img/team-3.jpg"/>
        <UserCard ref={(el) => (cardsRef.current[3] = el)} username="Ravi" message="Head Chef" img="https://themewagon.github.io/CaterServ/img/team-4.jpg"/>
      </div>
    </div>
  );
};

export default OurTeam;
