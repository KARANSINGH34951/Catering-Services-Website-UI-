import React from 'react'

const testimonialsData = [
  {
    name: "Person Name 1",
    profession: "Profession 1",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-2.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 2",
    profession: "Profession 2",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-4.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 3",
    profession: "Profession 3",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-1.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 4",
    profession: "Profession 4",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-3.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
];

const Testo = () => {
  return (
    <div className='grid grid-cols-6 overflow-hidden'>
      {testimonialsData.map((data, index) => (
        <div className='bg-blue-600 space-x-6 flex mx-8 px-10 py-5 h-[350px] w-[400px] gap-x-9' key={index}>
          <div>
            <img src={data.image} alt={data.name} />
          </div>
          <div>
            <h3>{data.name}</h3>
            <p>{data.profession}</p>
            <p>{data.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
  


export default Testo