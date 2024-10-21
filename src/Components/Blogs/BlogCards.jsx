import React from 'react';

const BlogCards = ({ image, day, month, title }) => {
  return (
    <div className="blog-item mt-4 my-5">
      <div className="relative rounded-lg shadow-lg border-zinc-300">
        <div className='overflow-hidden'>
          <img
            src={image}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-125"
            alt={title}
          />
        </div>

        <div className='flex justify-center items-center'>
          <div className="absolute h-24 p-5 rounded-lg -bottom-10 z-10 bg-opacity-100 text-white flex items-center mx-6 xl:mx-8 md:mx-4 lg:mx-8 bg-white">
            <div className="flex flex-col items-center bg-black text-white rounded-l-lg p-3">
              <p className="font-bold text-sm md:text-xl lg:text-lg mb-0">{day}</p>
              <p className="font-bold text-sm md:text-xl lg:text-lg mb-0">{month}</p>
            </div>
            <a href="#" className="ml-4 text-black text-sm md:text-xl lg:text-lg font-medium text-center flex-grow">
              {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
