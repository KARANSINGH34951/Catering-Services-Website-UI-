import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ heading, description, img }) => {
  return (
    <div className='text-center bg-[#C9E9D2] p-4 m-2 md:p-6 md:my-6 flex flex-col justify-center items-center h-auto w-full max-w-sm  hover:bg-gray-300 transition transform duration-300 rounded-lg space-y-3'>
      <img className='h-24 w-auto md:h-30 lg:h-32 md:w-24 object-cover mb-4' src={img} alt={`${heading} illustration`}/>
      <h4 className='my-2 text-lg md:text-2xl font-semibold'>{heading}</h4>
      <h6 className='text-sm md:text-base text-gray-600'>{description}</h6>
      <button className='py-3 my-3 px-4 rounded-full bg-slate-200'>Read More</button>
    </div>
  );
};

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceCard;
