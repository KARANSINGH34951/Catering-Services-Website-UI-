import React from 'react';
import ServiceCard from './ServiceCard';
import img from "./Cards-img/birthdaycake.png"
import img2 from "./Cards-img/pizza.png"
import img3 from "./Cards-img/donut.png"
import img4 from "./Cards-img/burger.png"
import img5 from "./Cards-img/food-tray.png"
import img6 from "./Cards-img/free-shipping.png"
import img7 from "./Cards-img/wheelchair.png"


const OurService = () => {
  const services = [
    { heading: "Corporate Catering", description: "Customizable catering solutions for business events.", img: img },
    { heading: "Event Planning", description: "Full-service planning for any occasion.", img: img2 },
    { heading: "Food Delivery", description: "Fast and convenient delivery from our kitchen to your door.", img:img3 },
    { heading: "Personal Chef", description: "Tailored meal experiences prepared by your own chef.", img:img4 },
    { heading: "Wedding Catering", description: "Elegant catering tailored to make your wedding unforgettable.", img:img4 },
    { heading: "Buffet Services", description: "Diverse buffet options for large gatherings.", img:img5 },
    { heading: "Private Parties", description: "Exclusive catering for intimate and private events.", img:img6 },
    { heading: "Gourmet Meal Prep", description: "Healthy and delicious meal prep for your busy lifestyle.", img:img7 },
  ];

  return (
    <div className='py-10 rounded-lg px-6'>
     <div className='flex justify-center items-center my-4'>
     <h2 className="inline-block border-2 border-orange-500 py-1 rounded-full px-4 text-center mx-auto">
        Our Services
    </h2>
     </div>

      <h1 className='text-center text-5xl font-medium text-gray-700 mb-10'>What We Offer?</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 -z-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            heading={service.heading} 
            description={service.description} 
            img={service.img} 
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
