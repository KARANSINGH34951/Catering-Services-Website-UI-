import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Person Name 1",
    profession: "Profession 1",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-2.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 2",
    profession: "Profession 2",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-4.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 3",
    profession: "Profession 3",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-1.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 4",
    profession: "Profession 4",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-3.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
];

const testimonialsData2 = [
  {
    name: "Person Name 5",
    profession: "Profession 5",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-4.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 6",
    profession: "Profession 6",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-2.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 7",
    profession: "Profession 7",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-1.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 8",
    profession: "Profession 8",
    image: "https://themewagon.github.io/CaterServ/img/testimonial-3.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  const settings = {
    dots:false,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container-fluid py-6 mx-10 md:mx-20 xl:mx-20 lg:mx-20">
      <div className="container">
       
        <div className="text-center space-y-5">
          <small className="d-inline-block fw-bold text-dark text-uppercase rounded-pill px-4 py-1 mb-3">
            <h2 className="inline-block border-2 py-1 rounded-full px-4 text-center mx-auto">
              TESTIMONIALS
            </h2>
          </small>
          <h1 className="text-4xl font-bold mb-5">What Our Customers Say!</h1>
        </div>

        
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-lg bg-white shadow-lg p-6 mx-2 w-96 h-80">
              <div className="d-flex mb-4">
                <div className="flex justify-start items-center">
                  <img
                    src={testimonial.image}
                    className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
                    alt={testimonial.name}
                  />
                  <h4 className="mb-0 text-2xl font-semibold text-gray-800 px-4">{testimonial.name}</h4>
                </div>
                <div className="ms-4 my-auto">
                  <p className="m-0 text-sm text-gray-600">{testimonial.profession}</p>
                </div>
                <div className="position-relative top-0 right-0 ms-auto">
                  <i className="fa fa-quote-right fa-3x text-primary"></i>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="flex mb-2">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
                <p className="text-lg text-gray-700">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </Slider>

        
        <Slider {...settings} className="mt-10">
          {testimonialsData2.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-lg bg-white shadow-lg p-6 mx-2 w-96 h-80">
              <div className="d-flex mb-4">
                <div className="flex justify-start items-center">
                  <img
                    src={testimonial.image}
                    className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
                    alt={testimonial.name}
                  />
                  <h4 className="mb-0 text-2xl font-semibold text-gray-800 px-4">{testimonial.name}</h4>
                </div>
                <div className="ms-4 my-auto">
                  <p className="m-0 text-sm text-gray-600">{testimonial.profession}</p>
                </div>
                <div className="position-relative top-0 right-0 ms-auto">
                  <i className="fa fa-quote-right fa-3x text-primary"></i>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="flex mb-2">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
                <p className="text-lg text-gray-700">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
