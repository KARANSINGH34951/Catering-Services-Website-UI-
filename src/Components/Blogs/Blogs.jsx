import React, { useEffect, useRef } from 'react';
import Card from './BlogCards';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const blogRef = useRef(null);

  useEffect(() => {
    const cards = blogRef.current.children;

    if (cards.length === 0) return;

   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: 'top 90%', 
        end: 'bottom 20%', 
        toggleActions: 'play none none reverse',
        once: true, 
      },
    });


    Array.from(cards).forEach((card) => {
      tl.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5, 
          ease: 'power2.out', 
        },
        '+=0.1' 
      );
    });

   
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="container-fluid py-6 bg-gray-100 mx-10 md:mx-20 lg:mx-20 xl:mx-20">
      <div className="container">
        <div className="text-center mb-5">
          <small className="inline-block font-bold text-dark uppercase bg-light border border-primary rounded-full px-4 py-1 mb-3">
            Our Blog
          </small>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Be First Who Read News</h1>
        </div>

        <div
          ref={blogRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-2"
        >
          <Card
            image="https://themewagon.github.io/CaterServ/img/blog-1.jpg"
            day="16"
            month="Sep"
            title="How to get more taste in your food"
          />
          <Card
            image="https://themewagon.github.io/CaterServ/img/blog-2.jpg"
            day="16"
            month="Sep"
            title="How to get more taste in your food"
          />
          <Card
            image="https://themewagon.github.io/CaterServ/img/blog-3.jpg"
            day="16"
            month="Sep"
            title="How to get more taste in your food"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
