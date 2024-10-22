import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MenuItem = ({ image, title, price, description }) => {
    const menuItemRef = useRef(null);

    useEffect(() => {
        const el = menuItemRef.current;

        gsap.fromTo(
            el,
            { y: 100, opacity: 0 }, 
            {
                y: 0,  
                opacity: 1,
                duration: 0.8, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",  
                    toggleActions: "play none none reverse",  
                },
            }
        );
    }, []);

    return (
        <div ref={menuItemRef} className="menu-item flex items-center justify-between p-4 rounded-lg">
            <div className="flex-shrink-0">
                <img src={image} alt={title} className="h-28 w-28 rounded-full object-cover" />
            </div>

            <div className="flex flex-col flex-grow px-2">
                <div className="flex justify-between items-center w-full">
                    <h5 className="text-2xl font-semibold">{title}</h5>
                    <p className="text-lg font-bold text-gray-700">₹{price}</p>
                </div>
                <hr className="text-black" />
                <p className="mt-2 text-lg text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default MenuItem;
